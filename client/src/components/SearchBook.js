/*
import React, { Fragment, useState, useEffect } from "react";
import "./book.css"

const ListBook = () => {

    const [books, setBooks] = useState([]);
    const [searchTitle, setSearchTitle] = useState(["Projekt Riese"])

    const getBooks = async nam => {
       // nam.preventDefault()
        try {
            const response = await fetch(`http://localhost:5000/home_library/search/${nam}`); //fetch makes a GET request by default
            const jsonData = await response.json()
            console.log(jsonData);
            setSearchTitle(jsonData);
            //console.log(searchTitle);
            console.log(jsonData);
            //window.location("/"); //a nie ="/"
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
            <form className="d-flex mt-5">
                <input type="text" className="form-control" value={searchTitle}
                       onChange={event => setSearchTitle(event.target.value)}/>
                <button className="btn btn-success" onClick={(e)=>getBooks(e)}>Search</button>
            </form>
            <section className="booklist">
                {searchTitle.map(book => (
                    <div key={book.book_id}>
                        <article className="product">
                            <img src={book.image}/>
                            <h4>{book.title}</h4>
                            <p>{book.author}</p>
                            <button className="btn btn-danger" onClick={()=>deleteBook(book.book_id)}>Delete</button>
                        </article>
                    </div>
                ))}
            </section>
        </Fragment>
    );
}

export default ListBook;
*/
