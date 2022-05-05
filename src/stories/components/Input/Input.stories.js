import React from 'react'
import Input from './Input'

export default {
    title: 'User & Password/Input',
    component: Input
}

export const User = () => <Input placeholder='Enter your username' />
export const Password = () => <Input placeholder='Enter your password' />