require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./db/db');

db.authenticate()
  .then(() => {
    return console.log('Connection has been established successfully.')
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error)
  });

app.get('/', (req, res) => {
  res.send('Hello!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening at localost:${PORT}`);
});
