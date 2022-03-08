const express = require('express');
const app = express();
const port = 4444;

app.get('/', (req, res) => {
  res.status(200).send('Hello World, hello node!');
});

app.listen(port, () => {
  console.log(`Az alkalmazás portja: ${port}`);
});


/**
 ./node_modules/.bin/nodemon
 */