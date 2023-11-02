const express = require("express");
const router = express.Router();
const fileupload = require("express-fileupload");
const path = require("path");
const app = express();

const assetPath = path.join(__dirname, "assets");
router.use(express.json());
router.post("/prediction-data", async (req, res) => {
  const {body} = req.body;
  console.log(body);
  res.status(200).json({ MSG: "go TO HELL" });
});
router.use(fileupload());

router.post("/docs", (req, res) => {
  console.log(req.files);
  const { file } = req.files;
  file.mv(path.join(assetPath, file.name));
  res.status(200).json({ message: "File Uploaded" });
});

module.exports = router;
