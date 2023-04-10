const express = require('express');
const router = express.Router();
const startBooks = require('../db/bookSeedData.js')
const Book = require('../models/book.js')

// INDEX - show all books
router.get('/', async (req, res) => {
	// wait for this to complete
	// Book.find() is a Promise
	// Promise is resolved or rejected
	const books = await Book.find({});
	// then run the next line of code
	res.render("books/index.ejs", {books});
});

// SEED - stock data
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

// NEW - page with form to add book
router.get('/new', (req, res) => {
	res.render("books/new.ejs");
});

// EDIT - page with form to edit book
router.get('/:id/edit', async (req, res) => {
	const book = await Book.findById(req.params.id);
	res.render("books/edit.ejs", {book})
})

// SHOW - show one book. generic! leave at bottom of gets
router.get('/:id', async (req, res) => {
	const book = await Book.findById(req.params.id);
	res.render("books/show.ejs", {book})
});

// EDIT - edit a book
router.put('/:id', async (req, res) => {
	const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.redirect('/books');
});

// POST - add a book
router.post('/', async (req, res) => {
	const book = await Book.create(req.body);
	res.redirect('/books');
});

// DELETE - delete a book
router.delete('/:id', async (req, res) => {
	const book = await Book.findByIdAndDelete(req.params.id);
	res.redirect('/books');
});

module.exports = router;