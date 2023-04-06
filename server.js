const express = require('express');
const app = express();
const PORT = 3000;
// Controller
const booksController = require('./controllers/books');

// controllers - routes
// views - EJS files (html & js)

// Middleware req -> middleware -> res
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:false})); // without urlencoded we get req.body undefined
app.use(express.json()); //parse JSON data in the request body

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.use('/books', booksController);

app.get('/*', (req, res) => {
    res.render("404.ejs")
})

// Listen at the bottom
app.listen(port, () => {
    console.log(`🥔 Server is listening to PORT ${PORT}`)
})