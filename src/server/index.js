/**
 * @author Vladimir Taytor <cetncat@gmail.com>
 */
const express = require('express');
const path = require('path');

const c = require('./config.json');

const app = express();
const viewsDir = path.join(__dirname, './views');

app.set('views', viewsDir);
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', {version: c.version}));

app.listen(c.port, () => console.log(`Example app listening on port ${c.port}!`));