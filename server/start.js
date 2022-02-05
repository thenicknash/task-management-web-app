if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = require('./server.js')

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
// app.listen(3000)