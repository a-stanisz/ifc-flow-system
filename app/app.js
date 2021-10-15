require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:8081',
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./db/db');
db.afterSync();

app.get('/', (req, res) => {
  res.send('Hello!');
});

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening at localost:${PORT}`);
});
