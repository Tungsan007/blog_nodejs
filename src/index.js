const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path')
const route = require('./routes')

// app.use(morgan('combined'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('.hbs', engine({ extname: '.hbs'}));
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')))

route(app);

app.listen(port, () => {
   console.log(`Example app listening on port http://localhost:${port}`);
})
