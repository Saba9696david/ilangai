import React from 'react'
import './Text.css'

function Text (props) {
    const { size = 'middle', ...rest} = props
    return (
        <textarea className={`text ${size}`} {...rest}> </textarea>
    )
    }


export default Text