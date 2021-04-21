var express = require('express');
var router = express.Router();
var account_controller = require('../contollers/account-controller');
var transaction_controller = require('../contollers/transacton-controller');

const { body,validationResult } = require('express-validator');
var Customer = require('../models/customer');

/// Customer Routes  ///

// GET request for creating customer. NOTE This must come before route for id (i.e. display customer).
router.get('/create', account_controller.customer_create_get);  

// POST request for creating customer.
router.post('/create', account_controller.customer_create_post);

// GET request to delete customer.
router.get('/:id/delete', account_controller.customer_delete_get);

// POST request to delete customer.
router.post('/:id/delete', account_controller.customer_delete_post);

// GET request to update customer.
router.get('/:id/update', account_controller.customer_update_get);

// POST request to update customer.
router.post('/:id/update', account_controller.customer_update_post);

// GET request for one customer.
router.get('/:id', account_controller.customer_detail);

// GET request for list of all customer.
router.get('/', account_controller.customer_list);

// GET request for login page.
router.get('/login', account_controller.customer_login);

// Post request for login page.
router.post('/login', account_controller.customer_login_post);

///  transaction routes ///
 
// GET request for creating transaction. NOTE This must come before route for id (i.e. display transaction).
router.get('/:id/transaction/create', transaction_controller.transaction_create_get);

// POST request for creating transaction.
router.post('/:id/transaction/create', transaction_controller.transaction_create_post);

// GET request to delete transaction.
router.get('/:id/transaction/:id/delete', transaction_controller.transaction_delete_get);

// POST request to delete transaction.
router.post('/:id/transaction/:id/delete', transaction_controller.transaction_delete_post);

// GET request for one transaction.
router.get('/:id/transaction/:id', transaction_controller.transaction_detail);

// GET request for list of all transactions.
router.get('/alltransactions', transaction_controller.transaction_list);

module.exports = router;