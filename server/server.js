const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const tasks = require('./routes/api/tasks');
app.use('/api/tasks', tasks);

app.get('/', (req, res) => {
  res.send('It works!');
});

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));

// module.exports = app;