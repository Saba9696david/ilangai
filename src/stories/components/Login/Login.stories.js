import React from 'react' 
import Button from './Login'

export default {
    title: 'New & Existing/User Button'
}

export const NewUser = () => <Button variant='newuser'>I am New User</Button>
export const ExistingUser = () => <Button variant='existinguser'>I already have an account</Button>