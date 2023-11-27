const express = require('express');4
const cors = require('cors');
const app= express();

app.use(cors());

app.get('/', (req, res) => {
  res.json(
    [
      {
        id:'101',
        username: 'adisorn'
      },
      {
        id:'102',
        username: 'jason'
      }
    ]
  )
})

const port = 3000;
app.listen(port, (err) => {
  if(err) throw err;
  console.log('The server is running on port ' + port + 'that http://localhost:' + port);
});