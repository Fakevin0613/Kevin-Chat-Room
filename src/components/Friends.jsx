import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { List, ListItem, ListSubheader, ListItemText, ListItemAvatar, ListItemButton, Avatar, Divider, IconButton } from '@mui/material'
import FriendsStyle from './FriendsStyle'
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import CloseIcon from '@mui/icons-material/Close';
import TransgenderIcon from '@mui/icons-material/Transgender';
import axios from 'axios';
import { userAcceptRoute, userRejectRoute } from '../api/ApiRoutes';
import { useEffect } from 'react';

const Friends = ({ friends, requests, current, setChatter, setCurrent }) => {
    const classes = FriendsStyle()
    const [currentSelected, setCurrentSelected] = useState(null);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        setChatter(contact);
    };

    useEffect(() => {
        setCurrentSelected(null)
    }, [friends])

    const sex = (sex) => {
        if (sex === "Male") {
            return <MaleIcon sx={{ color: "#1F45FC" }} fontSize='small' />
        }
        else if (sex === "Female") {
            return <FemaleIcon sx={{ color: "#FF0000" }} fontSize='small' />
        }
        else {
            return <TransgenderIcon sx={{ color: "#FF00FF" }} fontSize='small' />
        }
    }

    const acceptFriend = async (currentUser, targetUser) => {
        const { data } = await axios.post(`${userAcceptRoute}/${currentUser}`, { id: targetUser });
        if (data.status === false) {
            console.error(data.error)
        }
        if (data.status === true) {
            localStorage.setItem('chat-app-user-logined', JSON.stringify(data.resultAdd));
            setCurrent(data.resultAdd)
        }
    }

    const rejectFriend = async (currentUser, targetUser) => {
        const { data } = await axios.post(`${userRejectRoute}/${currentUser}`, { id: targetUser });
        if (data.status === false) {
            console.error(data.error)
        }
        if (data.status === true) {
            localStorage.setItem('chat-app-user-logined', JSON.stringify(data.resultRemove));
            setCurrent(data.resultRemove)
        }
    }

    return (
        <>
            <List sx={{ minWidth: "250px", height: "40vh", bgcolor: "#F5F5F5", borderRadius: "1vh", margin: "2vh", overflow: "auto", userSelect: 'none' }}
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ fontSize: "26px" }}>
                        Friends
                    </ListSubheader>
                }>
                <Divider component="li" />
                {requests.map((request, index) => {
                    return (
                        <div
                            key={request._id}
                        >
                            <ListItem alignItems="flex-start"
                                secondaryAction={
                                    <>
                                    <IconButton sx={{marginRight: "10px"}} edge="end" className={classes.addButton} onClick={(e) => {acceptFriend(current, request._id)}}>
                                        <CheckIcon sx={{ color: "#1F45FC" }}/>
                                    </IconButton>

                                    <IconButton sx={{marginRight: "10px"}} edge="end" className={classes.addButton} onClick={(e) => {rejectFriend(current, request._id)}}>
                                        <CloseIcon sx={{ color: "#FF0000" }}/>
                                    </IconButton>
                                    </>
                                }>
                                <ListItemAvatar>
                                    <Avatar alt={`${request.username}`} src={`${request.avatar}`} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${request.username}`}
                                    secondary={sex(request.gender)}
                                />
                            </ListItem>
                            <Divider variant="middle" component="li" />
                        </div>
                    )
                })}

                {friends.map((friend, index) => {
                    return (
                        <div
                            key={friend._id}
                            onClick={() => changeCurrentChat(index, friend)}
                            className={(index === currentSelected) ? classes.Selected : classes.NotSelected}
                        >
                            <ListItem alignItems="flex-start" sx={{ padding: "0" }}>
                                <ListItemButton sx={{
                                    borderRadius: "1vh"
                                }}>
                                    <ListItemAvatar>
                                        <Avatar alt={`${friend.username}`} src={`${friend.avatar}`} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${friend.username}`}
                                        secondary={sex(friend.gender)}
                                    />
                                </ListItemButton>

                            </ListItem>
                            <Divider variant="middle" component="li" />
                        </div>
                    )
                })}
            </List>
        </>

    )
}

export default Friends