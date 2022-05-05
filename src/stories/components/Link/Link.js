import React from 'react'
import './Link.css'

function HyperLink (props) {
    const { ...rest } = props
  return (
    <p className={'link'} {...rest} />
  )
}

export default HyperLink