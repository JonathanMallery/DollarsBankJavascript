#! /usr/bin/env node

console.log('This script populates some customers to your database. Specified database as argument - e.g.: populatedb mongodb+srv://root:root@cluster0.elfds.mongodb.net/bank_db?retryWrites=true&w=majority');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Customer = require('./models/customer')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var customers = []


function customerCreate(first_name, last_name, pin, balance, cb) {
  customerdetail = {first_name:first_name , last_name: last_name }
  if (pin != false) customerdetail.pin = pin
  if (balance != false) customerdetail.balance = balance
  
  var customer = new Customer(customerdetail);
       
  customer.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Customer: ' + customer);
    customers.push(customer)
    cb(null, customer)
  }  );
}


function createCustomers(cb) {
    async.series([
        function(callback) {
          customerCreate('Patrick', 'Star', 1234, 800.50, callback);
        },
        function(callback) {
          customerCreate('Mega', 'Man', 4567, 2000.44, callback);
        },
        function(callback) {
          customerCreate('Me', 'You', 1111, 174.96, callback);
        },
        ],
        // optional callback
        cb);
}

async.series([
    createCustomers
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Customers: '+ customers);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
