import React, { useState, useEffect, useRef } from 'react'
import ChatStyle from './ChatStyle'
import axios from 'axios';
import { userContactRoute, userFriendsRoute, userGetRequestsRoute, host } from '../api/ApiRoutes';
import Contacts from '../components/Contacts';
import Friends from '../components/Friends'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar';
import Welcome from '../components/Welcome';
import ChatBox from '../components/ChatBox';
import { io } from "socket.io-client";
import { Typography } from '@mui/material';
import SmallScreen from '../images/small_screen.png';

const Chat = () => {
  const socket = useRef();

  const classes = ChatStyle();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('chat-app-user-logined')));

  const [currentChatter, setChatter] = useState(null);
  const [allContacts, setContacts] = useState([]);
  const [allFriends, setFriends] = useState([]);
  const [allRequests, setRequests] = useState([]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);
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
  }, [currentUser])

  const handleAddFriend = (something) => {
    setCurrentUser(something)
  }
  const handleDeleteFriend = (something) => {
    setCurrentUser(something)
    setChatter(null)
  }

  const handleSetChatter = (something) => {
    setChatter(something)
  }

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1200px) and (min-height: 700px)").matches
  )

  useEffect(() => {
    window.matchMedia("(min-width: 1200px) and (min-height: 700px)")
    .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <>
      {matches &&
        <div className={classes.Container}>
          <div>
            <Contacts contacts={allContacts} current={currentUser._id} />
            <Friends friends={allFriends} requests={allRequests} current={currentUser._id} setChatter={handleSetChatter} setCurrent={handleAddFriend} />
            <BottomBar current={currentUser} />
          </div>
          <div>
            {currentChatter === null ?
              <Welcome /> : <ChatBox current={currentUser} currentChatter={currentChatter} socket={socket} setCurrent={handleDeleteFriend}/>
            }

          </div>
        </div>
      }
      {!matches && 
        <div className={classes.Small}>
          <img style={{ pointerEvents: "none", height: "200px", width: "350px" }} src={SmallScreen} alt="Too Small"></img>
          <Typography color={"white"} variant="h4">Don't you have a bigger screen?</Typography>
        </div>
      }
    </>

  )
}

export default Chat