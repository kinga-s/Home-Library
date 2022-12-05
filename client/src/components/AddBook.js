import React, { Fragment, useState } from "react";

const AddBook = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    let [borrowed, setBorrowed] = useState()
    const [borrowed_person, setBorrowedPerson] = useState("")

    const addBook = async event => {
        event.preventDefault();
        try {
            if(borrowed_person !== ""){
                borrowed = true
            }
            else {
                borrowed = false
            }
            const body = {title, description, image, author, borrowed, borrowed_person};
            const response = await fetch("http://localhost:5000/home_library",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            //alert("Book was added successfully")
            window.location = "/"; //after response has been send it refreshes
        } catch (e) {
            console.error(e.message)
        }

    }

    return (
        <Fragment>
            <button type="button" className="btn btn-success mt-5 add_book" data-toggle="modal" data-target="#newBook">
                Add book +
            </button>

            <div className="modal" id="newBook">
                <div className="modal-dialog">
                    <div className="modal-content popout">

                        <div className="modal-header popout-header">
                            <h4 className="modal-title">Add new book to your home library</h4>
                            <button type="button" className="close"
                                    data-dismiss="modal">&times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <h4>Title: </h4>
                            <input type="text" className="form-control" value={title}
                                   onChange={event => setTitle(event.target.value)}/>
                            <h4>Description: </h4>
                            <input type="text" className="form-control" value={description}
                                   onChange={event => setDescription(event.target.value)}/>
                            <h4>Image link: </h4>
                            <input type="text" className="form-control" value={image}
                                   onChange={event => setImage(event.target.value)}/>
                            <h4>Author: </h4>
                            <input type="text" className="form-control" value={author}
                                   onChange={event => setAuthor(event.target.value)}/>
                            <h4>Person who borrowed the book: </h4>
                            <input type="text" className="form-control" value={borrowed_person}
                                   onChange={event => setBorrowedPerson(event.target.value)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn my-button" data-dismiss="modal"
                                    onClick={(e) => addBook(e)}>Add
                            </button>
                            <button type="button" className="btn my-button" data-dismiss="modal">
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade"></div>

            <div className="modal"></div>

        </Fragment>
    );
}

export default AddBook;