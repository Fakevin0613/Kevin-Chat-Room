import React, { useState, useEffect } from 'react'
import ChatStyle from './ChatStyle'
import axios from 'axios';
import { userContactRoute, userFriendsRoute, userGetRequestsRoute } from '../api/ApiRoutes';
import Contacts from '../components/Contacts';
import Friends from '../components/Friends'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar';

const Chat = () => {
  const classes = ChatStyle();
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('chat-app-user-logined'));

  const [currentChatter, setChatter] = useState(null);
  const [allContacts, setContacts] = useState([]);
  const [allFriends, setFriends] = useState([]);
  const [allRequests, setRequests] = useState([])


  useEffect(() => {
    async function fetchContact() {
      try {
        if (currentUser) {
          const data = await axios.get(`${userContactRoute}/${currentUser._id}`)
          setContacts(data.data);
          const frienddata = await axios.get(`${userFriendsRoute}/${currentUser._id}`)
          setFriends(frienddata.data);
          const requestsdata = await axios.get(`${userGetRequestsRoute}/${currentUser._id}`)
          setRequests(requestsdata.data);
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
        <Contacts contacts={allContacts} current={currentUser._id} />
        <Friends friends={allFriends} requests={allRequests} current={currentUser} setChatter={setChatter} />
        <BottomBar current = {currentUser}/>
      </div>

    </div>
  )
}

export default Chat