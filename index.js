const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const db  = require('./models');
const routes = require("./routes")


const PORT = process.env.NODE_PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use('/', routes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => {
            console.log(`App has started on port: ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });