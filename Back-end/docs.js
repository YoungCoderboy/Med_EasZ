const express = require('express')
const router = express.Router()
const fileupload = require('express-fileupload')
const path = require('path')
const app = express()

const assetPath = path.join(__dirname, 'assets')
router.use(express.json())
router.post("/prediction-data/:id", async (req, res) => {
  const { body } = req.body;
  const object ={
    simp:body
  }
  console.log(object);
  const newTour = await User.findByIdAndUpdate(req.params.id, object , {
    new: true,
    runvalidators: false,
  });
  if (!newTour) {
    return next(new AppError("No tour found for id " + params.id, 404));
  }

  res.status(200).json({
    status: "success",
    // result: tours.length,
    data: {
      tours: body,
    },
  });
});
router.use(fileupload())

router.post('/docs', (req, res) => {
  console.log(req.files)
  const { file } = req.files
  file.mv(path.join(assetPath, file.name))
  res.status(200).json({ message: 'File Uploaded' })
})

module.exports = router
