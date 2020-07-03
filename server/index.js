const express = require('express');
const app = express();
const router = require('./router.js');
const cors = require('cors');

port = 3001;

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`listening as localhost:${port}`)
});