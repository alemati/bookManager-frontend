const reducer = (state = null, action) => {
   
    switch (action.type) {
      case ('SET_NOTIFICATION'):
        return action.data
      case ('CLOSE_NOTIFICATION'):
        return null
      default:
    }
  
    return state
  }
  
  export const setNotification = (content) => {
    return async dispatch => {
      const notification = {
          'content': content,
      }
      dispatch({
        type: 'SET_NOTIFICATION',
        data: notification,
      })
    }
  }
  
  export const closeNotification = obj => {
    return async dispatch => {
      dispatch({
        type: 'CLOSE_NOTIFICATION',
      })
    }
  }
  
  export default reducer