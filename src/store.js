import { createStore, combineReducers, applyMiddleware } from 'redux'
import booksReducer from './reducers/booksReducer'
import selectedBookReducer from './reducers/selectedBookReducer'
import formReducer from './reducers/formReducer'
import notificationReducer from './reducers/notificationReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    books: booksReducer,
    selectedBook: selectedBookReducer,
    form: formReducer,
    notification: notificationReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store