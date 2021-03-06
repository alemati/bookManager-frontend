import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(state => state.notification)
    if (notification === null) {
        return null
    }
    return (
        <div className="notification">
            <p className="notificationText"> {notification.content} </p>
        </div>
    )
}

export default Notification