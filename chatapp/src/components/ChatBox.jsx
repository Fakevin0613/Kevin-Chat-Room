import React from 'react'
import ChatBoxStyle from './ChatBoxStyle'
import { Paper, Typography } from '@mui/material';
import ChatTop from './ChatTop';

const ChatBox = ({ current }) => {
    const classes = ChatBoxStyle();
  return (
    <Paper position="fixed" sx={{ bgcolor: "White", margin: "2.5vh", height: "95vh" }}>
      <div className={classes.Content}>
        <ChatTop current = {current}/>
      </div>
    </Paper>
  )
}

export default ChatBox