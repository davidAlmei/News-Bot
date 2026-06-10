const cron = require("node-cron");
const { runBot } = require("../index");

cron.schedule("0 7 * * *", () => {
  runBot();
});