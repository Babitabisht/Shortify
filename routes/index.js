'use strict';

const express = require('express');

const router = express.Router();
const Url = require('../models/Url');

router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      res.redirect(url.longURL);
    } else {
      res.status(404).json('No url found');
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

module.exports = router;
