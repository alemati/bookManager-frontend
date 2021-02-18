import bookService from '../services/books'
import { setNotification, closeNotification } from '../reducers/notificationReducer'

const reducer = (state = [], action) => {
    switch (action.type) {
        case ('CREATE_NEW_BOOK'):
            return state.concat(action.data)
        case ('INIT_BOOKS'):
            return action.data
        case ('REMOVE_BOOK'):
            const newState = state.filter(book => book.id !== action.data)
            return newState
        case ('UPDATE_BOOK'):
            return state.map(book => book.id !== action.data.id ? book : action.data)
        default:
    }
    return state
}

export const initializeBooks = () => {
    return async dispatch => {
        const booksFromServer = await bookService.getAll()
        dispatch({
            type: 'INIT_BOOKS',
            data: booksFromServer,
        })
    }
}

export const createNewBook = (obj) => {
    
    return async dispatch => {
        try {
            const response = await bookService.create(obj)
            dispatch({
                type: 'CREATE_NEW_BOOK',
                data: response,
            })
        } catch (e) {
            dispatch(setNotification('Given input was way to long. Maximum length is 100 characters'))
            setTimeout(() => {
                dispatch(closeNotification())
            }, 3000)
            console.log('error caught in bookReducer', e)
        }
    }
}

export const updateBook = (obj, id) => {
    return async dispatch => {
        const response = await bookService.update(id, obj)
        dispatch({
            type: 'UPDATE_BOOK',
            data: response
        })
    }
}

export const removeBook = (id) => {
    return async dispatch => {
        await bookService.deleteById(id)
        dispatch({
            type: 'REMOVE_BOOK',
            data: id
        })
    }
}

export default reducer