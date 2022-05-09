import React from 'react'

function Icon(props) {
    const { variant = 'Iconin', ...rest} = props
    return (
        <button className={`button ${variant}`} {...rest}>
</button>
    )
}

export default Icon
