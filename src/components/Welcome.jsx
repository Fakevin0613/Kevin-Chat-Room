import { Paper, Typography } from '@mui/material'
import React from 'react'
import WelcomeStyle from './WelcomeStyle'
import Robot from '../images/robot.gif'

const Welcome = () => {
  const classes = WelcomeStyle();
  return (
    <Paper position="fixed" sx={{ bgcolor: "White", margin: "2.5vh", height: "95vh" }}>
      <div className={classes.Content}>
        <img style={{ pointerEvents: "none" }} src={Robot} alt="Welcome"></img>
        <Typography color={"#500979"} variant='h3'>{"Welcome to the ChatRoom!"}</Typography>
      </div>
    </Paper>
  )
}

export default Welcome