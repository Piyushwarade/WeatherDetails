"use strict";
let express = require('express');
let request = require('request');
let router = express.Router();

router.get('/', function (req, response) {
    let url = "http://api.openweathermap.org/data/2.5/forecast?q=" + req.query.city + "&appid=d1e981015eb3d7450524d8190aea4d6d&units=metric";
    request(url, function (err, res, body) {
        if (err) {
            response.send(err);
        } else if (res.statusCode === 200) {
            response.send(body);
        } else {
            response.send(res);
        }
    });
});
module.exports = router;
