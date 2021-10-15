const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:8081',
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./db/db');
db.Sequelize.afterSync();

app.get('/', (req, res) => {
  res.send('Hello ciuluu!');
});

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening at localost:${PORT}`);
});
