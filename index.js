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

app.get('/', (request, response) => {
	  response.send('Ok')
})

app.listen(PORT , (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Server is listening on port ${PORT}`);
})