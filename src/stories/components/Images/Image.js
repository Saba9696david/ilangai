import React from 'react'
import './Image.css'

function Image(props) {
    const {...rest} = props
    return (
        <img className={`imagein`} {...rest} />
    
    )
}

export default Image