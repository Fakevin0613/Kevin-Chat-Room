import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Paper, Avatar, IconButton, Typography } from '@mui/material'
import BottomBarStyle from './BottomBarStyle'
import { useNavigate } from 'react-router-dom'

const ChatTop = ({ current }) => {
  const classes = BottomBarStyle();
  const navigate = useNavigate();
  return (
    <>
      <Paper position="fixed" sx={{ bgcolor: "White", margin: "2vh", height: "5vh", width: "100%" }}>
        <div className={classes.Bottom}>
          <div className={classes.AvatarName}>
          <Avatar alt={`${current.username}`} src={`${current.avatar}`} />
          <Typography>{current.username}</Typography>
          </div>
          <IconButton edge="end" aria-label="delete" onClick={(e) => {navigate("/")}}>
            <LogoutIcon/>
          </IconButton>
        </div>
      </Paper>
    </>

  )
}

export default ChatTop