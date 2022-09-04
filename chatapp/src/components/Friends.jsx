import React, { useState } from 'react'
import { List, ListItem, ListSubheader, ListItemText, ListItemAvatar, ListItemButton, Typography, Avatar, Divider } from '@mui/material'
import FriendsStyle from './FriendsStyle'

const Friends = ({ friends, current, setChatter }) => {
    const classes = FriendsStyle()
    const [currentSelected, setCurrentSelected] = useState(null);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        setChatter(contact);
    };

    return (
        <>
            <List sx={{ height: "40vh", bgcolor: "#F5F5F5", borderRadius: "1vh", margin: "2vh", overflow: "auto", userSelect: 'none' }}
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ fontSize: "22px" }}>
                        Friends
                    </ListSubheader>
                }>
                <Divider component="li" />
               
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
                                        secondary={`${friend.gender}`}
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