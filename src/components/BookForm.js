import React from 'react'
import { createNewBook, removeBook, updateBook } from '../reducers/booksReducer'
import { setForm, clearForm } from '../reducers/formReducer'
import { clearSelectedBook } from '../reducers/selectedBookReducer'
import { setNotification, closeNotification} from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'

const BookForm = () => {
    const dispatch = useDispatch()
    const form = useSelector(state => state.form)
    const selectedBook = useSelector(state => state.selectedBook)

    const createNew = (event) => {
        event.preventDefault()
        if (form.title === '' || form.author === '' || form.description === '') {
            console.log('Please fill all the inputs')
            dispatch(setNotification('Please fill all the inputs'))
            setTimeout(() => {
                dispatch(closeNotification())
            }, 3000)

        } else {
            const newBook = {
                "title": form.title,
                "author": form.author,
                "description": form.description,
            }
            dispatch(createNewBook(newBook))
            dispatch(clearForm())
        }
    }

    const deleteSelectedBook = () => {
        dispatch(removeBook(selectedBook.id))
        dispatch(clearSelectedBook())
        dispatch(clearForm())
    }

    const update = () => {
        if (form.title === '' || form.author === '' || form.description === '') {
            console.log('Please fill all the inputs')
            dispatch(setNotification('Please fill all the inputs'))
            setTimeout(() => {
                dispatch(closeNotification())
            }, 3000)
        } else {
            const updatedBook = {
                "id": selectedBook.id,
                "title": form.title,
                "author": form.author,
                "description": form.description,
            }
            dispatch(updateBook(updatedBook, selectedBook.id))
            dispatch(clearSelectedBook())
            dispatch(clearForm())
        }
    }

    const changeTitle = (event) => {
        dispatch(setForm({ ...form, title: event.target.value }))
    }
    const changeAuthor = (event) => {
        dispatch(setForm({ ...form, author: event.target.value }))
    }
    const changeDescription = (event) => {
        dispatch(setForm({ ...form, description: event.target.value }))
    }

    return (
        <div>
            <form>
                Title: <br />
                <input size="41" type="text" value={form.title} onChange={(event) => changeTitle(event)} />
                <br />

                Author: <br />
                <input size="41" type="text" value={form.author} onChange={(event) => changeAuthor(event)} />
                <br />

                Description: <br />
                <textarea cols={35} rows={5} value={form.description} onChange={(event) => changeDescription(event)} />
                <br />
            </form>

            <div>
                {selectedBook === null ?
                    <div>
                        <button className="button" onClick={(event) => createNew(event)}>Save New</button>
                        <button className="disabledButton">Save</button>
                        <button className="disabledButton">Delete</button>
                    </div>
                    :
                    <div>
                        <button className="button" onClick={(event) => createNew(event)}>Save New</button>
                        <button className="button" onClick={() => update()}>Save</button>
                        <button className="deleteButton" onClick={() => deleteSelectedBook()}>Delete</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default BookForm