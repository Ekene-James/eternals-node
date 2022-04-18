const mongoose = require("mongoose");


const StorePaymentsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"]
    },
    transactionReference: {
      type: String,
      required: [true, "Please add a transaction reference"],
    },
    paystackTransaction: {
      type: String,
      required: [true, "Please add a transaction reference"],
    },
    totalAmount: {
      type: String,
      required: [true, "Please add an amount"],
    },
    itemsBought: {
      type: [{
        src:String,
        
        name:String,
        price:String,
        id:String,
        quantity:String,

      }],
      required: [true, "Please items bought"],
    },
   
   
    phone: {
      type: String,
      maxlength: [20, "Phone number can not be longer than 20 characters"]
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email"
      ]
    },
    
    createdAt: {
      type: Date,
      default: Date.now
    },

  },

);


module.exports = mongoose.model("StorePayments", StorePaymentsSchema);
