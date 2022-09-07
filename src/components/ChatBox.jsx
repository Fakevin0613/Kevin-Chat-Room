import React, { useState, useEffect } from 'react'
import ChatBoxStyle from './ChatBoxStyle'
import { Paper } from '@mui/material';
import ChatTop from './ChatTop';
import ChatBottom from './ChatBottom';
import axios from 'axios';
import { getMessageRoute, sendMessageRoute } from '../api/ApiRoutes';
import ChatMiddle from './ChatMiddle';

const ChatBox = ({ current, currentChatter, socket, setCurrent }) => {

  const [messages, setMessages] = useState([]);
  const [arrival, setArrival] = useState(null);

  useEffect(() => {
    async function fetchMessage() {
      if (currentChatter) {
        const response = await axios.post(getMessageRoute, {
          sender: current._id,
          receiver: currentChatter._id,
        })
        setMessages(response.data);
      }
    }
    fetchMessage()
  }, [currentChatter]);

  const handleMessageSend = async (message) => {
    const temp = {
      sender: current._id,
      receiver: currentChatter._id,
      message: message,
    };
    await axios.post(sendMessageRoute, temp);
    socket.current.emit("send-msg", temp);
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: message });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-receive", (msg) => {
        console.log(msg);
        setArrival({ fromSelf: false, message: msg });
      })
    }
  }, []);

  useEffect(() => {
    arrival && setMessages((prev) => [...prev, arrival]);
  }, [arrival])


  const classes = ChatBoxStyle();
  return (
    <Paper position="fixed" sx={{ bgcolor: "#F5F5F5", margin: "2.5vh", height: "95vh" }}>
      <div className={classes.Content}>
        <ChatTop currentChatter={currentChatter} setCurrent={setCurrent} currentUser={current}/>
        <ChatMiddle messages={messages} sender={current} receiver={currentChatter} />
        <ChatBottom handleSend={handleMessageSend} />
      </div>
    </Paper>
  )
}

export default ChatBox