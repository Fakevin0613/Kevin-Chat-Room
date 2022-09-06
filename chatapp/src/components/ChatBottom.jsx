import React, { useState } from 'react'
import { Input, Paper, IconButton, Menu, TextField} from '@mui/material'
import ChatBottomStyle from './ChatBottomStyle';
import Picker from 'emoji-picker-react'
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';

const ChatBottom = ({ handleSend }) => {
    const classes = ChatBottomStyle();
    const [message, setMessage] = useState("");

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleEmojiClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleEmoji = (event, emojiObject) => {
        let msg = message;
        msg += emojiObject.emoji;
        setMessage(msg);
        handleClose();
    };

    const handleWrite = (e) => {
        setMessage(e.target.value)
    };

    const sendChat = (event) => {
        event.preventDefault();
        if (message.length > 0) {
          handleSend(message);
          setMessage("");
        }
      };

    return (
        <div>
            <Paper position="fixed" sx={{ bgcolor: "white", margin: "2vh", padding: "1px", borderRadius: "30px" }}>
                <div className={classes.Bottom}>
                    <IconButton edge="end" onClick={handleEmojiClick}>
                        <EmojiEmotions />
                    </IconButton>
                    <Menu id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                transform: 'translateX(30px) translateY(-10vh)',
                            }
                        }}
                        >
                            <Picker onEmojiClick={handleEmoji} />
                    </Menu>

                    <TextField multiline maxRows={3} fullWidth placeholder="Send Message..." value = {message} onChange={handleWrite}/>

                    <IconButton edge="end" onclick={(e) => {sendChat(e)} }>
                        <SendIcon />
                    </IconButton>
                </div>
            </Paper>
        </div>

    )
}

export default ChatBottom