const express = require('express');
const app = express();

app.use(express.json());

class User{
    constructor(name){
    this.name = name;
    }
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hellow World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.post('/user', function(req, res, next) {
    const user = new User(req.body.name);
    user.push(user);
    res.send(user);
    });


const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
