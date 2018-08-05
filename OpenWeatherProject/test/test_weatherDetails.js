let express = require('express');
let request = require('request');
let router = express.Router();
let city;
    describe('test_weather - create unit Test - ', function() {
        beforeEach(function() {
            city = "london"
        });
        afterEach(function() {});
        it('should provide weather details', function(done) {
            let url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=d1e981015eb3d7450524d8190aea4d6d&units=metric";
            request(url,function(err,res,body){
                if(err){
                    done(err);
                }else{
                  done(null,body);
                }
            })
        });
    });