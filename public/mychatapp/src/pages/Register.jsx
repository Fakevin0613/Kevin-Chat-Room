import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { Button, TextField, Typography } from '@mui/material';
=======
import { Typography } from '@mui/material';
import RegisterStyle from './RegisterStyle';
>>>>>>> 67c4d56f (login page done)

const Register = () => {
    const handleSubmit = (e) => {
        alert("submit");
    }
    const handleWrite = (e) => {
        console.log(e);
    }
<<<<<<< HEAD
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
=======
    const classes = RegisterStyle();
    return (
        <div className={classes.Box}>
            <Typography variant='h4' color="#500979">
                Register
            </Typography>
            <input
                className={classes.Input}
                type="text"
                name='UserName'
                placeholder='UserName'
                onChange={handleWrite}
            />
            <input
                className={classes.Input}
                type="email"
>>>>>>> 67c4d56f (login page done)
                placeholder='Email'
                name='Email'
                onChange={handleWrite}
            />
<<<<<<< HEAD
            <TextField
                id="standard-password-input"
                type='password'
=======
            <input
                className={classes.Input}
                type="password"
>>>>>>> 67c4d56f (login page done)
                placeholder='Password'
                name='Password'
                onChange={handleWrite}
            />
<<<<<<< HEAD
            <TextField
                id="standard-password-input"
                type='password'
=======
            <input
                className={classes.Input}
                type="password"
>>>>>>> 67c4d56f (login page done)
                placeholder='Comfirm Password'
                name='ComfirmPassword'
                onChange={handleWrite}
            />
<<<<<<< HEAD
            <Button variant="contained" onClick={handleSubmit}>Register</Button>
            <span>Already have an account? <Link to='/'>Login here</Link></span>
        </>
=======
            <button className={classes.Button} onClick={handleSubmit}>Let's go!</button>
            <Typography variant='h7' color="#500979">Already have an account? <Link to='/'>Login here</Link></Typography>

        </div>
>>>>>>> 67c4d56f (login page done)
    )
}



export default Register