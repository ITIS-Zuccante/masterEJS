const express = require('express')
var path = require('path');
const app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded

const port = 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//our tiny alert message midleware

/****************** DEFINITION OF GET ROUTES  **************/

app.get('/', (req, res) => {
    res.render('pages/home')
});

app.get('/links', (req, res) => {
    //array with items to send
    var items = [
        { name: 'node.js', url: 'https://nodejs.org/en/' },
        { name: 'ejs', url: 'https://ejs.co' },
        { name: 'expressjs', url: 'https://expressjs.com' },
        { name: 'vuejs', url: 'https://vuejs.org' },
        { name: 'nextjs', url: 'https://nextjs.org' }];
    res.render('pages/links', {
        links: items
    })
});

app.get('/list', (req, res) => {
    //array with items to send
    var items = ['node.js', 'expressjs', 'ejs', 'javascript', 'bootstrap'];
    res.render('pages/list', {
        list: items
    })
});

app.get('/table', (req, res) => {
    //array with items to send
    var items = [
        { name: 'node.js', url: 'https://nodejs.org/en/' },
        { name: 'ejs', url: 'https://ejs.co' },
        { name: 'expressjs', url: 'https://expressjs.com' },
        { name: 'vuejs', url: 'https://vuejs.org' },
        { name: 'nextjs', url: 'https://nextjs.org' }];
    res.render('pages/table', {
        table: items
    })
});

//our tiny alert message midleware
function messages(req, res, next) {
    var message;
    res.locals.message = message;
    next();
}

app.get('/form', messages, (req, res) => {
    res.render('pages/form');
});

/****************** DEFINITION OF POST ROUTES  **************/

app.post('/form', (req, res) => {
    var message = req.body;
    res.locals.message = message;
    res.render('pages/form');
});

/****************** START APPLICATION  **************/

app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));