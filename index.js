var express = require('express');
var app = express();

app.use(express.json());

app.get('/', function (req, res) {
res.send('Hello World');
});

const residentTaxRoute = require("./routes/resident_tax");
app.use("/api/v1/residentTax", residentTaxRoute);

const fundRoute = require("./routes/fund");
app.use("/api/v1/fund", fundRoute);

const geolocRoute = require("./routes/geoloc");
app.use("/api/v1/geoloc", geolocRoute);

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
})
