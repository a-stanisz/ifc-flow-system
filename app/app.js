const express = require('express');
const app = express();
const PORT = process.env.NODE_DOCKER_PORT;

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(`App listening at localost:${PORT}`);
});
