const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");

const Task = require("../../models/Task");
const Play = require("../../models/Play");
const { playLog } = require("../../middleware/play");

// @route    POST api/play
// @desc     Play Game
router.post("/", async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { tgid, task } = req.body;

    if (task && Object.keys(task).length) {
      await Task.create(task);
      const response = await Task.find();
      return res.status(200).json({ response });
    } else {
      return res.status(400).json({ errors: "bad request" });
    }
    //   next();
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// @route    POST api/play
// @desc     Play Game
router.post("/url", async (req, res, next) => {
  console.log("Task complete!");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { url, earn } = req.body;
  console.log({ url, earn });
  try {
    const response = await Task.findOneAndUpdate(
      { url },
      { $inc: { earn } },
      { new: true, upsert: true }
    );

    return res.status(200).json({ response });
    //   next();
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// @route    GET api/play/user/:user_id
// @desc     Get play info by user ID
// @access   Public
router.get("/", async (req, res) => {
  try {
    const tasklist = await Task.find();

    if (!tasklist) throw { message: "tasklist empty" };

    res.json(tasklist);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "tasklist not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
