import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material';
import RegisterStyle from './RegisterStyle';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import axios from 'axios'
import { registerRoute } from '../api/ApiRoutes';

const Register = () => {
    const navigate = useNavigate()
    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light"
    }

    const [credentials, setCredential] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [confirmPassword, setConfirmpassword] = useState("")

    const handleWrite = (e) => {
        setCredential({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleConfirmed = (e) => {
        setConfirmpassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        if(validate()){
            const { data } = await axios.post(registerRoute, credentials);
            if(data.status === false){
                toast.error(data.msg, toastOptions);
            }
            if(data.status === true){
                localStorage.setItem('chat-app-user', JSON.stringify({
                    username: credentials.username,
                    password: credentials.password,
                }));
                navigate("/");
            }
            
        }
    }

    const validate = () => {
        if(credentials.username.length < 5){
            toast.error("Username must have at least 5 characters", toastOptions);
            return false;
        }
        else if(credentials.password.length < 8){
            toast.error("Password must have at least 8 characters", toastOptions);
            return false;
        }
        else if(credentials.email.length < 1){
            toast.error("Email must not be empty", toastOptions);
            return false;
        }
        else if (confirmPassword !== credentials.password) {
            toast.error("Please ensure the Password and Comfirmed Password be same", toastOptions);
            return false;
        }
        else{
            return true;
        }
    }

    const classes = RegisterStyle();
    return (
        <>
            <div className={classes.Box}>
                <Typography variant='h4' color="#500979">
                    Register
                </Typography>
                <input
                    className={classes.Input}
                    type="text"
                    name='username'
                    placeholder='UserName'
                    onChange={handleWrite}
                />
                <input
                    className={classes.Input}
                    type="email"
                    placeholder='Email'
                    name='email'
                    onChange={handleWrite}
                />
                <input
                    className={classes.Input}
                    type="password"
                    placeholder='Password'
                    name='password'
                    onChange={handleWrite}
                />
                <input
                    className={classes.Input}
                    type="password"
                    placeholder='Comfirmed Password'
                    name='ComfirmPassword'
                    onChange={handleConfirmed}
                />
                <button className={classes.Button} onClick={handleSubmit}>Let's go!</button>
                <Typography variant='h7' color="#500979">Already have an account? <Link className={classes.Link} to='/'>Login here</Link></Typography>
            </div>
            <ToastContainer />
        </>

        

    )
}



export default Register