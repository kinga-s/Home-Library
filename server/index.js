const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')


app.use(cors());
app.use(express.json());

//get book list
app.get("/home_library", async (req, res) => {
    try {
        const allBooks = await pool.query("SELECT * FROM books");
        res.json(allBooks.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a book
app.get("/home_library/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await pool.query("SELECT * FROM books WHERE book_id = $1", [
            id
        ]);

        res.json(book.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//add a book
app.post('/home_library', async (req, res) => {
    try{
        const { title } = req.body;
        const { description } = req.body;
        const { image } = req.body;
        const { author } = req.body;
        const { borrowed } = req.body;
        const { borrowed_person } = req.body;
        const newBook =
            await pool.query("INSERT INTO books (title, description, image, author, borrowed, borrowed_person) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", [
                title,
                description,
                image,
                author,
                borrowed,
                borrowed_person
            ]);
        res.json(newBook.rows[0])
    } catch(e){
        console.error(e.message);
    }
})

//update a book
app.put("/home_library/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const { description } = req.body;
        const { image } = req.body;
        const { author } = req.body;
        const { borrowed } = req.body;
        const { borrowed_person } = req.body;
        const updateBook = await pool.query(
            "UPDATE books SET title = $1, description = $2, image = $3, author = $4, borrowed = $5, borrowed_person = $6 WHERE book_id = $7",
            [
                title,
                description,
                image,
                author,
                borrowed,
                borrowed_person,
                id]
        );

        res.json("Book was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a book
app.delete("/home_library/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBook = await pool.query("DELETE FROM books WHERE book_id = $1", [
            id
        ]);
        res.json("Book was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});

app.listen(5000, ()=> {
    console.log("Server is listening on port 5000...")
})