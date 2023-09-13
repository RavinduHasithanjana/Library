const Author = require('../models/author');

class AuthorService {

    async getAllAuthors() {
        try {
            const allAuthors = await Author.find();
            return allAuthors;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching all authors from the database');
        }
    }


    async getAuthorById(authorId) {
        try {
            const byIdAuthors = await Author.findById(authorId);
            return byIdAuthors;
        } catch (error) {
            throw new Error('Error fetching all authors from the database');
        }
    }

    async createAuthor(authorData) {
        try {
            const author = await Author.create(authorData);
            return author;
        } catch (error) {
            throw new Error('Error fetching all authors from the database');
        }
    }

}

module.exports = new AuthorService();