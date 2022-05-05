import React from 'react'
import './Sign.css'

function Sign(props) {
    const { variant = 'signin', ...rest} = props
    return (
        <button className={`button ${variant}`} {...rest}>
            
</button>
    )
}

export default Sign