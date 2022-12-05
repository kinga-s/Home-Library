import React, { Fragment, useState, useEffect } from "react";
import EditBook from "./EditBook";
import BookDescription from "./BookDescription";

const ListBook = () => {

    const [books, setBooks] = useState([]);


    const getBooks = async () => {
        try {
            const response = await fetch("http://localhost:5000/home_library");
            const jsonData = await response.json()
            setBooks(jsonData);
            window.location("/");
        } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        getBooks();
    }, []) // [] make only one request


    const deleteBook = async id => {
        try{
            const response = await fetch(`http://localhost:5000/home_library/${id}`,{
                method: "DELETE"
            });
            setBooks(books.filter(book => book.book_id !== id))
        } catch (e) {
            console.error(e.message)
        }
    }


    return (
        <Fragment>
            <section className="booklist">
                {books.map(book => (
                    <div key={book.book_id}>
                        <article className="product">
                            <BookDescription book = {book}/>
                            <h4>{book.title}</h4>
                            <p>{book.author.toUpperCase()}</p>
                            <div className="guziki">
                                <EditBook book = {book}/>
                                <button className="btn my-button" onClick={()=>deleteBook(book.book_id)}>Delete</button>
                            </div>

                        </article>
                    </div>
                ))}
            </section>
        </Fragment>
    );
}

export default ListBook;