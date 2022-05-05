import React from 'react'
import './Input.css'

function Input (props) {
    const { ...rest } = props
    return (
        <input className={`input`} {...rest}/>
    )
}

export default Input