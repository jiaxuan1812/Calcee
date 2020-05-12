//creating a server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hi from server!");
});

app.post('/enroll', (req, res) => {
    console.log(req.body);
    res.status(200).send({"message":"Message has been received"});
});

app.listen(port, () => {
    console.log("Server running on " + port);
});