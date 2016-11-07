var express = require('express');  
var request = require('request');
var app = express();  

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get('/getPumpList', function (req, res) {

  var latitude = req.query.latitide;
  var vehicleSpec = req.query.vehicleSpec;
  var vehicleMake = req.query.vehicleMake;
  var vehicleModel = req.query.vehicleModel;
  var longitude = req.query.longitude;

  request({
      url: 'https://www.ecotricity.co.uk/api/ezx/v1/getPumpList',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'      
      },
  body: 'latitude='+latitude+'&vehicleSpec='+vehicleSpec+'&vehicleMake='+vehicleMake+'&vehicleModel='+vehicleModel+'&longitude=' + longitude
  }, function(error, response, body){
      if(error) {
            res.send(error)
      } else {
      
            res.send(body)
      }
  });
})

app.listen(process.env.PORT || 8080);  
