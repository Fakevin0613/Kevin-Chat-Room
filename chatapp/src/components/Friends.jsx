import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { List, ListItem, ListSubheader, ListItemText, ListItemAvatar, ListItemButton, Typography, Avatar, Divider } from '@mui/material'
import FriendsStyle from './FriendsStyle'
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';

const Friends = ({ friends, requests, current, setChatter }) => {
    const classes = FriendsStyle()
    const [currentSelected, setCurrentSelected] = useState(null);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        setChatter(contact);
    };

    const sex = (sex) => {
        if(sex === "Male"){
            return <MaleIcon fontSize='small'/>
        }
        else if(sex === "Female"){
            return <FemaleIcon fontSize='small'/>
        }
        else{
            return <TransgenderIcon fontSize='small'/>
        }
    }

    return (
        <>
            <List sx={{ height: "40vh", bgcolor: "#F5F5F5", borderRadius: "1vh", margin: "2vh", overflow: "auto", userSelect: 'none' }}
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ fontSize: "22px" }}>
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
                                    <button className={classes.addButton}>
                                        <CheckIcon/>
                                    </button>
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