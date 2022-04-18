const express = require("express");
const router = express.Router();
const {
  postPaymentDetails,
} = require("../controller/storePayments");



//mount the controllers
router
  .route("/")
  .post(postPaymentDetails);
  
  module.exports = router;