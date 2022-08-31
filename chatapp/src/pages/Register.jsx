import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material';
import RegisterStyle from './RegisterStyle';

const Register = () => {
    const handleSubmit = (e) => {
        alert("submit");
    }
    const handleWrite = (e) => {
        console.log(e);
    }
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
                placeholder='Email'
                name='Email'
                onChange={handleWrite}
            />
            <input
                className={classes.Input}
                type="password"
                placeholder='Password'
                name='Password'
                onChange={handleWrite}
            />
            <input
                className={classes.Input}
                type="password"
                placeholder='Comfirm Password'
                name='ComfirmPassword'
                onChange={handleWrite}
            />
            <button className={classes.Button} onClick={handleSubmit}>Let's go!</button>
            <Typography variant='h7' color="#500979">Already have an account? <Link to='/'>Login here</Link></Typography>

        </div>
    )
}



export default Register