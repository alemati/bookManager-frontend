const initialState = { title: '', author: '', description: ''}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('SET_FORM'):
            return action.data
        case ('CLEAR_FORM'):
            return initialState
        default:
    }
    return state
}

export const setForm = (obj) => {
    return async dispatch => {
        dispatch({
            type: 'SET_FORM',
            data: obj,
        })
    }
}

export const clearForm = () => {
    return async dispatch => {
        dispatch({
            type: 'CLEAR_FORM',
        })
    }
}

export default reducer