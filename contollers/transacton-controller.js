var Transaction = require('../models/transaction');

// Display list of all transactions.
exports.transaction_list = function(req, res) {
    res.send('NOT IMPLEMENTED: transaction list');
};

// Display detail page for a specific transaction.
exports.transaction_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: transaction detail: ' + req.params.id);
};

// Display transaction create form on GET.
exports.transaction_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: transaction create GET');
};

// Handle transaction create on POST.
exports.transaction_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: transaction create POST');
};

// Display transaction delete form on GET.
exports.transaction_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: transaction delete GET');
};

// Handle transaction delete on POST.
exports.transaction_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: transaction delete POST');
};

// Display transaction update form on GET.
exports.btransaction_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: transaction update GET');
};

// Handle transaction update on POST.
exports.transaction_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: transaction update POST');
};