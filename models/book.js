// import mongoose
const {mongoose} = require('../db/connection');

// import Schema
const Schema = mongoose.Schema; 

// create book schema
const booksSchema = new Schema({
    title: String,
    author: String,
    cover: String, 
    rating: Number, 
    blurb: String
});

// create Book model
const Book = mongoose.model('Book', booksSchema);

module.exports = Book;