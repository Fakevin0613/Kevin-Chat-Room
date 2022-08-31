import React from 'react'
<<<<<<< HEAD

const Login = () => {
  return (
    <div>Login</div>
=======
import { Typography } from '@mui/material'
import LoginStyle from './LoginStyle'
import { Link } from 'react-router-dom'
const Login = () => {
  const handleSubmit = (e) => {
    alert("submit");
  }
  const handleWrite = (e) => {
    console.log(e);
  }
  const classes = LoginStyle();
  return (
    <div className={classes.Box}>
      <Typography variant='h4' color="#500979">
        Login
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
        type="password"
        placeholder='Password'
        name='Password'
        onChange={handleWrite}
      />
      <button className={classes.Button} onClick={handleSubmit}>Login</button>
      <Typography variant='h7' color="#500979">New User? <Link to='/register'>Register</Link></Typography>

    </div>
>>>>>>> 67c4d56f (login page done)
  )
}

export default Login