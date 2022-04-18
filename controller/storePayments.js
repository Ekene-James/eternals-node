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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');

//---- other code

//Preflight CORS handler
  if(req.method === 'OPTIONS') {
      return res.status(200).json(({
          body: "OK"
      }))
  }
 try {

  const storePayments = await StorePayments.create(req.body);
  res.status(201).json({ success: true, data: storePayments });
  
} catch (error) {
  res.status(500).json({ success: false, data: 'Server Error' });
  
}

});


