var express = require("express");
var router = express.Router();
const pkg = require("../package.json");

/* GET home page. */
router.get("/health", (req, res) => {
  res.send({
    name: pkg.name,
    version: pkg.version,
    connection: "connection up and running",
  });
});

module.exports = router;
