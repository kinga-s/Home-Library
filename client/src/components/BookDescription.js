import React, { Fragment, useState, useEffect } from "react";

const BookDescription = ({book}) => {

    return (
        <Fragment>
            <button type="button" data-toggle="modal"
                    data-target={`#desc_id${book.book_id}`} id="buttonImage">
                <img src={book.image}  />
            </button>

            <div class="modal" id={`desc_id${book.book_id}`}>
                <div class="modal-dialog">
                    <div class="modal-content popout">

                        <div class="modal-header popout-header">
                            <h4 class="modal-title">{book.title}</h4>
                            <button type="button" class="close"
                                    data-dismiss="modal">&times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <h4>{book.description}</h4>
                            <h5>Borrowed to: {book.borrowed_person}</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn my-button" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade"></div>

            <div class="modal"></div>
        </Fragment>
    )
}
export default BookDescription