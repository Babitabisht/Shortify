'use strict';

const express = require('express');

const router = express.Router();

const validURL = require('valid-url');
const shortID = require('shortid');
const config = require('config');
const Url = require('../models/Url');

router.post('/shorten', async (req, res) => {
  const { longURL } = req.body;
  console.log(req.body);

  const baseURL = config.get('baseURL');
  console.log(baseURL);
  console.log(validURL.isUri(baseURL));
  console.log(validURL.isUri(longURL));
  if (!validURL.isUri(baseURL)) {
    console.log('here 1');
    res.status('422').json('Invalid base URL');
  }

  const urlCode = shortID.generate();
  if (validURL.isUri(longURL)) {
    try {
      console.log(`------------`);

      let url = await Url.findOne({ longURL });
      if (url) {
        res.json(url);
      } else {
        const shortURL = `${baseURL}/${urlCode}`;
        url = new Url({
          longURL,
          shortURL,
          urlCode,
          date: new Date()
        });

        await url.save();
        res.json(url);
      }
    } catch (error) {
      console.log(`--------catch----`);

      res.send('500').json('server error !');
    }
  } else {
    res.send('422').json('Invalid long url');
  }
});

module.exports = router;
