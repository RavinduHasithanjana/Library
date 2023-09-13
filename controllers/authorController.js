const authorService = require('../services/authorService');

exports.getAllAuthors = async (req, res) => {
    try {
        const allAuthors = await authorService.getAllAuthors();
        res.json(allAuthors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAuthorById = async (req, res) => {
    try {
        const authorid = req.params.id;
        const allAuthors = await authorService.getAllAuthors(authorid);
        res.json(allAuthors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addAuthor = async (req, res) => {
    try {
       const author = req.body
        const allAuthors = await authorService.createAuthor(author);
        res.json(allAuthors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};