import React from 'react'
import ChatBoxStyle from './ChatBoxStyle'
import { Paper, Typography } from '@mui/material';
import ChatTop from './ChatTop';
import ChatBottom from './ChatBottom';

const ChatBox = ({ current, currentChatter }) => {
    const classes = ChatBoxStyle();
  return (
    <Paper position="fixed" sx={{ bgcolor: "#F5F5F5", margin: "2.5vh", height: "95vh" }}>
      <div className={classes.Content}>
        <ChatTop currentChatter = {currentChatter}/>
        <ChatBottom/>
      </div>
    </Paper>
  )
}

export default ChatBox