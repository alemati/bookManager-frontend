import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import BookForm from './components/BookForm'
import BooksList from './components/BooksList'
import Notification from './components/Notification'
import { initializeBooks } from './reducers/booksReducer'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBooks())
  }, [dispatch])

  return (
    <div>
      <div className="row">
        <div className="column">
          <BookForm />
          <Notification />
        </div>
        <div className="column">
          <BooksList />
        </div>
      </div>
    </div>
  )
}

export default App;
