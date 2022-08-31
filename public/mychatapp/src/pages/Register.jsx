import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material';

const Register = () => {
    const handleSubmit = (e) => {
        alert("submit");
    }
    const handleWrite = (e) => {
        console.log(e);
    }
    return (
        <>
            <Typography variant='h1'>
                Welcome to the ChatRoom
            </Typography>
            <TextField
                id="standard-required"
                name='UserName'
                label='UserName'
                onChange={handleWrite}
            />
            <TextField
                id="standard-required"
                type='text'
                placeholder='Email'
                name='Email'
                onChange={handleWrite}
            />
            <TextField
                id="standard-password-input"
                type='password'
                placeholder='Password'
                name='Password'
                onChange={handleWrite}
            />
            <TextField
                id="standard-password-input"
                type='password'
                placeholder='Comfirm Password'
                name='ComfirmPassword'
                onChange={handleWrite}
            />
            <Button variant="contained" onClick={handleSubmit}>Register</Button>
            <span>Already have an account? <Link to='/'>Login here</Link></span>
        </>
    )
}



export default Register