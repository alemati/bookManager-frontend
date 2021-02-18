const reducer = (state = null, action) => {
    switch (action.type) {
        case ('SET_SELECTED_BOOK'):
            return action.data
        case ('CLEAR_SELECTED_BOOK'):
            return null
        default:
    }
    return state
}

export const setSelectedBook = (obj) => {
    return async dispatch => {
        dispatch({
            type: 'SET_SELECTED_BOOK',
            data: obj,
        })
    }
}

export const clearSelectedBook = () => {
    return async dispatch => {
        dispatch({
            type: 'CLEAR_SELECTED_BOOK',
        })
    }
}

export default reducer