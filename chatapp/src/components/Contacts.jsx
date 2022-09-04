import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { List, ListItem, ListSubheader, ListItemText, ListItemAvatar, ListItemButton, Typography, Avatar, Divider, IconButton } from '@mui/material'
import ContactsStyle from './ContactsStyle';

const Contacts = ({ contacts }) => {
    const classes = ContactsStyle()

    return (
        <>
            <List sx={{ height: "40%", bgcolor: "#F5F5F5", borderRadius: "1vh", margin: "2vh", overflow: "auto", userSelect: 'none' }}
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
                                    <IconButton edge="end" aria-label="delete">
                                        <AddIcon />
                                    </IconButton>
                                }>
                                <ListItemAvatar>
                                    <Avatar alt={`${contact.username}`} src={`${contact.avatar}`} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${contact.username}`}
                                    secondary={`${contact.gender}`}
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