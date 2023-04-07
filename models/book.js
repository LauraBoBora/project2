const {mongoose} = require('../db/connection');

const booksSchema = new mongoose.Schema({
    title: String,
    author: String,
    cover: URL
})

const Book = mongoose.model('Book', booksSchema)

module.exports = Book