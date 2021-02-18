import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSelectedBook, setSelectedBook } from '../reducers/selectedBookReducer'
import { setForm, clearForm } from '../reducers/formReducer'


const BooksList = () => {
    const books = useSelector(state => state.books)
    return (
        <div>
            All books: <br />
            <div className="allBooks">
                {books.map(book => <BookLine key={book.id} book={book} />)}
            </div>
        </div>
    )
}

const BookLine = ({ book }) => {
    const selectedBook = useSelector(state => state.selectedBook)
    const dispatch = useDispatch()

    let style;
    if (selectedBook === null) {
        style = "listItem"
    } else {
        const isSelected = selectedBook.id === book.id ? true : false
        style = isSelected ? "selectedItem" : "listItem"
    }

    const handleClick = () => {
        if (selectedBook === null || selectedBook.id !== book.id) {
            dispatch(setSelectedBook(book))
            dispatch(setForm({ title: book.title, author: book.author, description: book.description }))
        } else {
            dispatch(clearSelectedBook())
            dispatch(clearForm())
            style = "listItem"
        }
    }

    return (
        <div className={style} onClick={() => handleClick()}>
            {book.title} <br />
            by {book.author}
            
        </div>
    )
}

export default BooksList