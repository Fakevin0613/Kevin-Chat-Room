import React, { useState, useEffect } from 'react'
import ChatStyle from './ChatStyle'
import axios from 'axios';
import { userContactRoute } from '../api/ApiRoutes';
import Contacts from '../components/Contacts';

const Chat = () => {
  const classes = ChatStyle();
  const currentUser = JSON.parse(localStorage.getItem('chat-app-user-logined'));

  const [currentChatter, setChatter] = useState(null);
  const [allContacts, setContacts] = useState([]);
  

  useEffect(() => {
    async function fetchContact() {
      if (currentUser) {
        const data = await axios.get(`${userContactRoute}/${currentUser._id}`)
        setContacts(data.data);
      }
    };
    fetchContact()
  }, [])

  const handleChatterChange = (chat) => {
    setChatter(chat)
  } 

  return (
    <div className={classes.Container}>
      <Contacts contacts = {allContacts} current = {currentUser} setChatter = {setChatter}/>
    </div>
  )
}

export default Chat