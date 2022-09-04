import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Paper, Avatar, IconButton, Typography } from '@mui/material'
import BottomBarStyle from './BottomBarStyle'

const BottomBar = ({ current }) => {
  const classes = BottomBarStyle();
  return (
    <>
      <Paper position="fixed" sx={{ bgcolor: "White", margin: "2vh", height: "10vh" }}>
        <div className={classes.Bottom}>
          <div className={classes.AvatarName}>
          <Avatar alt={`${current.username}`} src={`${current.avatar}`} />
          <Typography>{current.username}</Typography>
          </div>
          
          <IconButton edge="end" aria-label="delete">
            <LogoutIcon/>
          </IconButton>
        </div>
      </Paper>
    </>

  )
}

export default BottomBar