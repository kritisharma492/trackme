const express = require('express')
const mysql = require('mysql')
const app = express()
const PORT = process.env.PORT || 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "trunk",
  database : 'trackMe'
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// app.get('/', (request, response) => {
// 	  var sql = "INSERT INTO UserLocation (device_uuid, location_lat, location_long) VALUES ( '" +request.query.device +"','" + request.query.lat
// 	  + "','" + request.query.long + "')";
// 	  console.log(request.query.device);
// 	  console.log(request.query.lat);
// 	  console.log(request.query.long);
// 	  con.query(sql, function (err, result) {
// 	    if (err) throw err;
// 	    console.log("Result: " + result);
// 	  });
// 	  response.send('Ok')
// })
app.set('port', (process.env.PORT || 5000));
app.get('/', (request, response) => {
	  response.send('Ok')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});