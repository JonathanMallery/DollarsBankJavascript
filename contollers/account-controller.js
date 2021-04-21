var Customer = require('../models/customer');
const { body,validationResult } = require('express-validator');

// Display list of all customers.
exports.customer_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Customer list');
};

// Display detail page for a specific customer.
exports.customer_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: customer detail: ' + req.params.id);
};

// Display detail page for a specific customer.
exports.customer_login = function(req, res) {
    res.render('login_form', { title: 'Login to Account'});
};

// Display detail page for a specific customer.
exports.customer_login_post = function(req, res) {
    res.send('NOT IMPLEMENTED:' + req.params.id);;
};

// Display customer create form on GET.
exports.customer_create_get = function(req, res) {
    res.render('customer_form', { title: 'Create Account'});
};

// Handle customer create on POST.
exports.customer_create_post = [

    // Validate and sanitize fields.
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('last_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('pin', 'Invalid pin').isLength({ min: 4 }).escape().withMessage('Pin must be specified.'),
    body('balance', 'Invalid balance').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('customer_form', { title: 'Create Account', customer: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an Author object with escaped and trimmed data.
            var customer = new Customer(
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    pin: req.body.pin,
                    balance: req.body.balance
                });
            customer.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect(customer.url);
            });
        }
    }
];

// Display customer delete form on GET.
exports.customer_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: customer delete GET');
};

// Handle customer delete on POST.
exports.customer_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: customer delete POST');
};

// Display customer update form on GET.
exports.customer_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: customer update GET');
};

// Handle customer update on POST.
exports.customer_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: customer update POST');
};