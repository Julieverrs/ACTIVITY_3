const express = require('express');
const routes = require('./routes/router');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', './views');
app.use('/', routes); 

app.listen(3000, () => {
    console.log('Server initialized on http://localhost:3000');
});