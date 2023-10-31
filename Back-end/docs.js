const express = require("express");
const router = express.Router();
const fileupload = require("express-fileupload");
const path = require("path");

const assetPath = path.join(__dirname, "assets");

router.use(fileupload());

router.post("/docs", (req, res) => {
  console.log(req.files);
  try {
    const { file } = req.files;
    file.mv(path.join(assetPath, file.name));
    res.status(200).json({ message: "File Uploaded" });
  } catch (error) {
    res.status(500).json({message:"Internal Server Error!!"});
  }
});

module.exports = router;
