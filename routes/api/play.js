const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");

const User = require("../../models/User");
const Play = require("../../models/Play");
const { playLog } = require("../../middleware/play");

// @route    POST api/play
// @desc     Play Game
router.post(
  "/",
  async (req, res, next) => {
    console.log("Play game: ", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { tgid, selected } = req.body;

      // Get user info
      const user = await User.findOne({ tgid: tgid });
      const now = new Date();
      const { lastPlayDate } = user;
      const offset =
        Math.floor(
          ((now.getTime() - lastPlayDate.getTime()) / 1000 / 3600 / 24) * 10
        ) + user.energy;
      const realEnergy = offset > 10 ? 10 : offset;
      console.log("offset: ", now, lastPlayDate, offset, realEnergy);
      if (realEnergy <= 0) {
        req.body = { user: user.id, result: 0 };
        console.log(tgid, "Empty energy!");
        res.status(201).json("Empty energy!");
        return;
      }

      // Generate random
      const random = 1; // Math.floor(Math.random(0, 1) * 3 + 1);
      console.log(random, selected);
      const result = random != selected;
      if (result) {
        req.body = { user: user.id, result: 0 };
        console.log(tgid, "Doesn't match!");
        res.status(201).json("Doesn't match!");
      } else {
        req.body = { user: user.id, result: 1 };
        console.log(tgid, "Success!");
        res.status(200).json("Success!");
      }
      const totalScore = result ? user.totalScore : user.totalScore + 1;
      const score = result ? user.score : user.score + 1;
      const energy = realEnergy > 0 ? realEnergy - 1 : 0;
      // Using upsert option (creates new doc if no match is found):
      const ret = await User.findOneAndUpdate(
        { tgid },
        { totalScore, score, energy, lastPlayDate: now },
        { new: true, upsert: true }
      );

      next();
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
  playLog
);

// @route    GET api/play/user/:user_id
// @desc     Get play info by user ID
// @access   Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const plays = await Play.find({
      user: req.params.user_id,
    });

    if (!plays) throw { message: "play not found" };

    res.json(plays);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "play not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    GET api/users
// @desc     Get all users
// @access   Private
router.get("/", async (_, res) => {
  try {
    const plays = await Play.find();

    if (!plays) throw { message: "play not found" };

    res.json(plays);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "play not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
