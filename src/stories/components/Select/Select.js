import React from 'react'
import './Select.css'

function Label (props) {
    const { ...rest } = props
    return (
        <label {...rest}/>
    )
}

export default Label