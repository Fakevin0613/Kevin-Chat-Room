import React, { useState } from 'react'
import { Typography } from '@mui/material'
import LoginStyle from './LoginStyle'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import axios from 'axios'
import { loginRoute } from '../api/ApiRoutes';
import { useEffect } from 'react';
const Login = () => {

  const classes = LoginStyle();
  const navigate = useNavigate()

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if(localStorage.getItem('chat-app-user')){
      setLoginInfo({...loginInfo,
        username: JSON.parse(localStorage.getItem('chat-app-user')).username,
      })
    }
  }, [])

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light"
  };

  const validate = () => {
    if (loginInfo.username.length < 5) {
      toast.error("Username must have at least 5 characters", toastOptions);
      return false;
    }
    else if (loginInfo.password.length < 8) {
      toast.error("Password must have at least 8 characters", toastOptions);
      return false;
    }
    else {
      return true;
    }
  }

  const handleWrite = (e) => {
    setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    if(validate()){
      const { data } = await axios.post(loginRoute, loginInfo);
      if(data.status === false){
          toast.error(data.msg, toastOptions);
      }
      if(data.status === true){
          console.log(JSON.stringify(data.user))
          localStorage.setItem('chat-app-user-logined', JSON.stringify(data.user));
          navigate("/chat");
      }
    }
  }

  return (
    <>
      <div className={classes.Box}>
        <Typography variant='h4' color="#500979">
          Login
        </Typography>
        <input
          className={classes.Input}
          type="text"
          name='username'
          placeholder='Username'
          value={loginInfo.username}
          onChange={handleWrite}
        />
        <input
          className={classes.Input}
          type="password"
          placeholder='Password'
          name='password'
          value={loginInfo.password}
          onChange={handleWrite}
        />
        <button className={classes.Button} onClick={handleSubmit}>Login</button>
        <Typography variant='h7' color="#500979">New User? <Link className={classes.Link} to='/register'>Register</Link></Typography>
      </div>
      <ToastContainer />
    </>

  )
}

export default Login