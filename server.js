const express = require('express');
const recipes = require('./mocks/mock-recipes');
const countries = require('./mocks/mock-countries');
const states = require('./mocks/mock-states');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/view'));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/recipes', (req, res) => {
  const searchString = req.query.searchString.toLowerCase();

  // filter the data
  const filteredData = recipes.data.filter((item) => {
    return item.name.toLowerCase().includes(searchString);
  });

  console.log(filteredData);
  res.send(filteredData.slice(0, 10));
});

app.get('/countries', (req, res) => {
  const searchString = req.query.searchString.toLowerCase();

  // filter the data
  const filteredData = countries.data.filter((item) => {
    return item.name.toLowerCase().includes(searchString);
  });

  console.log(filteredData);
  res.send(filteredData.slice(0, 10));
});

app.get('/states', (req, res) => {
  const searchString = req.query.searchString.toLowerCase();

  // filter the data
  const filteredData = states.data.filter((item) => {
    return item.name.toLowerCase().includes(searchString);
  });

  console.log(filteredData);
  res.send(filteredData.slice(0, 10));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
