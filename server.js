// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/htmlRoutes")(app,fs);
require("./routes/apiRoutes")(app,fs);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

