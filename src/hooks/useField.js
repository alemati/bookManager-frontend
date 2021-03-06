import React, { useState } from 'react'

const useField = (type) => {
    const [value, setValue] = useState('')
    const onChange = (event) => {
        setValue(event.target.value)
    }
    const set = (value) => {
        setValue(value)
    }
    
    return [{
        type,
        value,
        onChange,
      }, set]
    
}

export default useField;