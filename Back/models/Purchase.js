const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
    CustomerID: {
      type: String,
      required: true,
    },
    Branch : {
      type: String,
      unique : true
    },
    ProductLine : {
      type : String,
      required : true
    },
    Quantity : {
      type : Number,
      required : true
    },
    Tax: {
      type: String,
      required: true
    },
    Total: {
      type: String,
      required: true
    },
    Date: {
      type: Date,
      required: true
    },
    
  });
  
  module.exports = Purchase = mongoose.model('Purchase', PurchaseSchema);