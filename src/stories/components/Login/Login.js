
import React from 'react'
import './Login.css'

function Login(props) {
    const { variant = 'newuser', ...rest} = props
    return (
        <button className={`button ${variant}`} {...rest}>

</button>
    )
}

export default Login