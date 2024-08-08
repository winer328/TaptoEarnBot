const Play = require("../models/Play");

async function playLog(req) {
  const { user, result } = req.body;
  console.log(user, result);
  try {
    await Play.create({ user, result });
  } catch (err) {
    console.error("something wrong with auth middleware");
  }
}

module.exports = { playLog };
