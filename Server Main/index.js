const express = require('express');
const app = express();
const user = require('./excersize/model');

app.use(express.json());



const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));