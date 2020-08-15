import React from 'react';
import './AddBook.css';
const book = {
    bookName: '',
    author: ''
}
const AddBook = (props) => {

    const onInputBlur = (event) => {
        if (event.target.id === 'bookName')
            book.bookName = event.target.value
        else if (event.target.id === 'author')
            book.author = event.target.value
    }
    return (
        <div className="addBook">
            <h2>Add Book</h2>
            <span>
            <input  placeholder='Bookname' type='text' id='bookName' onBlur={onInputBlur}></input>
            <input  placeholder='Author' type='text' id='author' onBlur={onInputBlur}></input>
            <button onClick={props.onSave.bind(this, book)}>Save</button>
            </span>
        </div>
    );
}

export default React.memo(AddBook);