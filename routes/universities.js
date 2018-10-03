const express = require('express');
const University = require('../models/university');
const catchErrors = require('../lib/async-error');

const router = express.Router();

function needAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash('danger', 'Please signin first.');
    res.redirect('/signin');
  }
}

/* GET universities listing. */
router.get('/', catchErrors(async (req, res, next) => {
  res.render('universities/index');
}));

module.exports = router;