import React, { useRef } from 'react'
import { Paper, Typography, Avatar, List } from '@mui/material'
import ChatMiddleStyle from './ChatMiddleStyle';
import { useEffect } from 'react';

const ChatMiddle = ({ messages, sender, receiver }) => {
    const classes = ChatMiddleStyle();
    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, [messages])
    return (
        <>
            <Paper sx={{ height: "fit-content", margin: "0 2vw 0 2vw", border: 'none', boxShadow: "none", bgcolor: "transparent" }}>
                <div className={classes.Middle}>
                    <List sx={{ height: "70vh", overflow: 'auto' }}>
                        {messages.map((message, index) => {
                            return (
                                (message.fromSelf === true) ?
                                    <div className={classes.Sender} key={index} ref={scrollRef}>
                                        <Paper sx={{ padding: "1vh", maxWidth: "50%" }}>
                                            <Typography sx={{ userSelect: "all", overflowWrap: "break-word", whiteSpace: "pre-line" }}>{message.message}</Typography>
                                        </Paper>
                                        <Avatar alt={`${sender.avatar}`} src={`${sender.avatar}`} />
                                    </div>
                                    :
                                    <div className={classes.Receiver} key={index} ref={scrollRef}>
                                        <Avatar alt={`${receiver.avatar}`} src={`${receiver.avatar}`} />
                                        <Paper sx={{ padding: "1vh", maxWidth: "50%", bgcolor: "#00d4ff" }}>
                                            <Typography sx={{ userSelect: "all", overflowWrap: "break-word" }}>{message.message}</Typography>
                                        </Paper>
                                    </div>
                            );
                        })}
                    </List>

                </div>
            </Paper>
        </>

    )
}

export default ChatMiddle