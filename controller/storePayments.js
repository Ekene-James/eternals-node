const path = require("path");
const StorePayments = require("../models/StorePayments");

const asyncHandler = require("../middleware/asyncMiddleware");



// desc     post paymentDetails
//route     post /api/v1/storePayments
//access    public
exports.postPaymentDetails = asyncHandler(async (req, res, next) => {

 // const isValidEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(req.body.email) && req.body.email.length > 0 

  const storePayments = await StorePayments.create(req.body);

  res.status(201).json({ success: true, data: storePayments });
});


