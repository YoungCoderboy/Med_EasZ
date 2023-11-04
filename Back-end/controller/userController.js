// const User = require('./../model/userModel');
// const addsimp = (async (req, res, next) => {
//   const params = req.params;
//   const newTour = await User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runvalidators: false,
//   });
//   if (!newTour) {
//     return next(new AppError("No tour found for id " + params.id, 404));
//   }

//   res.status(200).json({
//     status: "success",
//     // result: tours.length,
//     data: {
//       tours: tour,
//     },
//   });
// });

// module.exports = addsimp;
