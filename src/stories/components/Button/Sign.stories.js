import React from 'react' 
import Button from './Sign'
import FacebookIcon from '@material-ui/icons/Facebook'

export default {
    title: 'SignIn & SignOut/Button'
}

export const SignIn = () => <Button variant='signin'>Sign In</Button>
export const SignUp = () => <Button variant='signup'>Sign Up</Button>
export const Submit = () => <Button variant='submit'>Submit</Button>
export const Facebook = () => <Button variant='fb'>&nbsp;<FacebookIcon></FacebookIcon>&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Facebook</Button>