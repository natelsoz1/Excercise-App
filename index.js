const express = require('express');
const app = express();
const user = require('./model');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hellow World!!!');
});

app.post('/user', function(req, res, next) {
    const user = new User(req.body.name);
    user.push(user);
    res.send(user);
    });


const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
