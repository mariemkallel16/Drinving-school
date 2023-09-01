const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  CustomerID: {
    type: String,
    required: true,
    unique : true
  },
  Name : {
    type: String,
    unique : true
  },
  City: {
    type: String,
    required: true
  },
  CustomerType: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },

  ProductLine : {
    type : String,
    required : true
  },
  
  Payment: {
    type: String,
    required: true
  },
  
  Rating: {
    type: Number,
    required: true
  },
});

module.exports = User = mongoose.model('User', UserSchema);