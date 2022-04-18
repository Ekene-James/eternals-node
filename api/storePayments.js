const express = require("express");

const router = express.Router();
const {
  postPaymentDetails,
  getData
} = require("../controller/storePayments");




//mount the controllers
router
  .route("/")
  .get(getData)
  .post(postPaymentDetails);
  
  module.exports =router;