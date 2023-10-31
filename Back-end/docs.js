const express = require("express");
const router = express.Router();
const fileupload = require("express-fileupload");
const path=require("path");

const assetPath=path.join(__dirname,"assets");

router.use(fileupload());

router.post("/docs", (req, res) => {
  console.log(req.files);
  const {file}=req.files;
  res.status(200).json({ message: "File Uploaded" });
});

module.exports = router;
