const express = require('express');
const router = express.Router();
const startBooks = require('../db/bookSeedData.js')
const Book = require('../models/book.js')

// INDEX
router.get('/', async (req, res) => {
	// wait for this to complete
	// Book.find() is a Promise
	// Promise is resolved or rejected
	const books = await Book.find({});
	// then run the next line of code
	res.render("books/index.ejs", {books});
});

// SEED
router.get('/seed', (req, res) => {
	Book.deleteMany({}) // delete what was there
	.then(() => {
		Book.insertMany(startBooks) // insert seed data
		.then((books) => {
			console.log(books); //show us what we got
			res.redirect('/books'); // go back to index with seed data inputted
		})
	})	
});

// NEW
router.get('/new', (req, res) => {
	res.render("books/new.ejs");
});

// POST
router.post('/', async (req, res) => {
	const book = await Book.create(req.body);
	res.redirect('/books');
});

// SHOW - generic! leave at bottom
router.get('/:id', async (req, res) => {
	const book = await Book.findById(req.params.id);
	res.render("books/show.ejs", {book})
});

module.exports = router;