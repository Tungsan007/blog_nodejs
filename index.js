const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   let a = 1, b = 2;
   let result = a + b;
   res.send(`<h1>Hello Nguyen tung san</h1>`)
})

app.listen(port, () => {
   console.log(`Example app listening on port http://localhost:${port}`);
})