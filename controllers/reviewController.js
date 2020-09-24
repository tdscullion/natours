const Review = require('../models/reviewModel');
// const catchAsync = require('../utils/catchAsync');
const factoryFunc = require('./handlerFactory');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = factoryFunc.getAll(Review);
exports.getReview = factoryFunc.getOne(Review);
exports.createReview = factoryFunc.createOne(Review);
exports.updateReview = factoryFunc.updateOne(Review);
exports.deleteReview = factoryFunc.deleteOne(Review);
