import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Paper, Avatar, IconButton, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ChatTopStyle from './ChatTopStyle';

const ChatTop = ({ currentChatter }) => {
  const classes = ChatTopStyle();
  const navigate = useNavigate();
  return (
    <>
      <Paper position="fixed" sx={{ bgcolor: "white", margin: "2vh" }}>
        <div className={classes.Top}>
          <div className={classes.AvatarName}>
          <Avatar alt={`${currentChatter.username}`} src={`${currentChatter.avatar}`} />
          <Typography>{currentChatter.username}</Typography>
          </div>
          <IconButton edge="end" >
            <PermIdentityIcon/>
          </IconButton>
        </div>
      </Paper>
    </>

  )
}

export default ChatTop