const express = require("express");
const router = express.Router();
const {
  postPaymentDetails,
  getData
} = require("../controller/storePayments");
const allowCors = require("../middleware/allowCors");



//mount the controllers
router
  .route("/")
  .get(getData)
  .post(allowCors(),postPaymentDetails);
  
  module.exports = router;