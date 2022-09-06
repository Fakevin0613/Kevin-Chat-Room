import React from 'react'
import { Paper } from '@mui/material'
import ChatBottomStyle from './ChatBottomStyle';

const ChatBottom = ({ currentChatter }) => {
  const classes = ChatBottomStyle();
  return (
    <>
      <Paper position="fixed" sx={{ bgcolor: "white", margin: "2vh", borderRadius:"30px"}}>
        <div className={classes.Bottom}>
        </div>
      </Paper>
    </>

  )
}

export default ChatBottom