var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var customerSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    last_name: {type: String, required: true, maxLength: 100},
    pin: {type: Number, required: true, maxLength: 4},
    balance: {type: Number, required: true},
  }
);

// Virtual for customer's full name
customerSchema
.virtual('name')
.get(function () {
  return this.first_name + ', ' + this.last_name;
});

// Virtual for customer's balance
customerSchema
.virtual('accountbalance')
.get(function () {
  return this.balance;
});

// Virtual for customer's URL
customerSchema
.virtual('url')
.get(function () {
  return '/customer/' + this._id;
});

//Export model
module.exports = mongoose.model('customer', customerSchema);
