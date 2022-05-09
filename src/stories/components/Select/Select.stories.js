import React from 'react'
import Label from './Select'

export default {
    title: 'Select/Option',
    component: Label
}

export const Option = () => <Label>Choose Language : <select>
        <option>Tamil</option>
        <option>Telugu</option>
        <option>Hindi</option>
        <option>Kannada</option>
        <option selected>Malayalam</option>
</select>
</Label>