import React, { Fragment, useState } from "react";

const EditBook = ({book}) => {

    const [title, setTitle] = useState(book.title)
    const [description, setDescription] = useState(book.description)
    const [image, setImage] = useState(book.image)
    const [author, setAuthor] = useState(book.author)
    let [borrowed, setBorrowed] = useState(book.borrowed)
    const [borrowed_person, setBorrowedPerson] = useState(book.borrowed_person)

    const editBook = async e => {
        e.preventDefault()
        try{
            if(borrowed_person !== ""){
                borrowed = true
            }
            else {
                borrowed = false
            }
            const body = {title, description, image, author, borrowed, borrowed_person};
            const response = await fetch(`http://localhost:5000/home_library/${book.book_id}`,{
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/"; //after response has been send it refreshes
        } catch (e) {
            console.error(e.message)
        }
    }

    return (
        <Fragment>
            <button type="button" class="btn my-button" data-toggle="modal"
                    data-target={`#id${book.book_id}`}
                    onClick={()=>setTitle(book.title)}
                    onClick={()=>setDescription(book.description)}
                    onClick={()=>setImage(book.image)}
                    onClick={()=>setAuthor(book.author)}
                    onClick={()=>setBorrowedPerson(book.borrowed_person)} id="editButton">
                Edit
            </button>

            <div class="modal" id={`id${book.book_id}`}>
                <div class="modal-dialog">
                    <div class="modal-content popout">

                        <div class="modal-header popout-header">
                            <h4 class="modal-title">Edit your book</h4>
                            <button type="button"
                                    onClick={()=>setTitle(book.title)}
                                    onClick={()=>setDescription(book.description)}
                                    onClick={()=>setImage(book.image)}
                                    onClick={()=>setAuthor(book.author)}
                                    onClick={()=>setBorrowedPerson(book.borrowed_person)}
                                    class="close"
                                    data-dismiss="modal">&times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <h4>Title: </h4>
                            <input type="text" className="form-control popout-input" value={title}
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
                                    onClick={(e)=>editBook(e)}>Update</button>
                            <button type="button" class="btn my-button" data-dismiss="modal"
                                    onClick={()=>setTitle(book.title)}
                                    onClick={()=>setDescription(book.description)}
                                    onClick={()=>setImage(book.image)}
                                    onClick={()=>setAuthor(book.author)}
                                    onClick={()=>setBorrowedPerson(book.borrowed_person)}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade"></div>

            <div class="modal"></div>
        </Fragment>
    )
}

export default EditBook;