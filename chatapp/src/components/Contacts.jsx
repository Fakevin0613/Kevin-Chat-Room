import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { List, ListItem, ListSubheader, ListItemText, ListItemAvatar, ListItemButton, Typography, Avatar, Divider, IconButton } from '@mui/material'
import ContactsStyle from './ContactsStyle';
import axios from 'axios'
import { userRequestRoute } from '../api/ApiRoutes';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';

const Contacts = ({ contacts, current }) => {
    const classes = ContactsStyle()

    const disableAdd = (event) => {
        event.currentTarget.disabled = true;
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

    const addFriend = async (currentUser, targetUser) => {
        const { data } = await axios.post(`${userRequestRoute}/${current}`, {id: targetUser});
        if (data.status === false) {
            console.error(data.error)
        }
        if (data.status === true) {
            console.log(data.result)
        }
    }

    return (
        <>
            <List sx={{ height: "40vh", bgcolor: "#F5F5F5", borderRadius: "1vh", margin: "2vh", overflow: "auto", userSelect: 'none' }}
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ fontSize: "22px" }}>
                        Explore
                    </ListSubheader>}>
                <Divider component="li" />
                {contacts.map((contact, index) => {
                    return (
                        <div
                            key={contact._id}
                        >
                            <ListItem alignItems="flex-start"
                                secondaryAction={
                                    <button className={classes.addButton} onClick={(e) => {disableAdd(e); addFriend(current, contact._id) }}>
                                        <AddIcon/>
                                    </button>
                                }>
                                <ListItemAvatar>
                                    <Avatar alt={`${contact.username}`} src={`${contact.avatar}`} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${contact.username}`}
                                    secondary={sex(contact.gender)}
                                />
                            </ListItem>
                            <Divider variant="middle" component="li" />
                        </div>
                    )
                })}
            </List>
        </>

    )
}

export default Contacts