import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import { Paper, Avatar, IconButton, Typography } from '@mui/material'
import BottomBarStyle from './BottomBarStyle'
import { useNavigate } from 'react-router-dom'

const BottomBar = ({ current }) => {
  const classes = BottomBarStyle();
  const navigate = useNavigate();
  return (
    <>
      <Paper position="fixed" sx={{ minHeight: "5vh", minWidth: "250px", bgcolor: "White", margin: "2vh", height: "10vh" }}>
        <div className={classes.Bottom}>
          <div className={classes.AvatarName}>
            <Avatar alt={`${current.username}`} src={`${current.avatar}`} />
            <Typography>{current.username}</Typography>
          </div>

          <div className={classes.AvatarName}>
            <IconButton edge="end" onClick={(e) => { navigate("/setpersonal") }}>
              <InfoIcon />
            </IconButton>
            <IconButton edge="end" onClick={(e) => { localStorage.clear(); navigate("/") }}>
              <LogoutIcon />
            </IconButton>
          </div>

        </div>
      </Paper>
    </>

  )
}

export default BottomBar