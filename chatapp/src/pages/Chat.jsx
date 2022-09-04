import React, { useState, useEffect } from 'react'
import ChatStyle from './ChatStyle'
import axios from 'axios';
import { userContactRoute, userFriendsRoute } from '../api/ApiRoutes';
import Contacts from '../components/Contacts';
import Friends from '../components/Friends'
import { useNavigate } from 'react-router-dom'

const Chat = () => {
  const classes = ChatStyle();
  const navigate = useNavigate()
  const currentUser = JSON.parse(localStorage.getItem('chat-app-user-logined'));

  const [currentChatter, setChatter] = useState(null);
  const [allContacts, setContacts] = useState([]);
  const [allFriends, setFriends] = useState([])


  useEffect(() => {
    async function fetchContact() {
      try {
        if (currentUser) {
          const data = await axios.get(`${userContactRoute}/${currentUser._id}`)
          setContacts(data.data);
          const frienddata = await axios.get(`${userFriendsRoute}/${currentUser._id}`)
          setFriends(frienddata.data);
        }
        else {
          navigate("/")
        }
      }
      catch (e) {
        console.error(e)
        navigate("/")
      }

    };
    fetchContact()
  }, [])

  const handleChatterChange = (chat) => {
    setChatter(chat)
  }

  return (
    <div className={classes.Container}>
      <div>
        <Contacts contacts={allContacts} />
        <Friends friends={allFriends} current={currentUser} setChatter={setChatter} />
      </div>

    </div>
  )
}

export default Chat