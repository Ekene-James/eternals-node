const path = require("path");
const StorePayments = require("../models/StorePayments");

const asyncHandler = require("../middleware/asyncMiddleware");



// desc     get test data
//route     get /api/storePayments
//access    public
exports.getData = asyncHandler(async (req, res, next) => {
try {
  res.status(201).json({ success: true, data: 'Get data successful' });
  
} catch (error) {
  res.status(500).json({ success: false, data: 'Server Error' });
  
}
});
// desc     post paymentDetails
//route     post /api/storePayments
//access    public
exports.postPaymentDetails = asyncHandler(async (req, res, next) => {

 // const isValidEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(req.body.email) && req.body.email.length > 0 

  const storePayments = await StorePayments.create(req.body);

  res.status(201).json({ success: true, data: storePayments });
});


