import React, { useState } from 'react'
import { List, ListItem, ListSubheader, ListItemText, ListItemAvatar, ListItemButton, Typography, Avatar, Divider } from '@mui/material'
import ContactsStyle from './ContactsStyle';

const Contacts = ({ contacts, current, setChatter }) => {
    const classes = ContactsStyle()
    const [currentSelected, setCurrentSelected] = useState(null);

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        setChatter(contact);
    };

    return (
        <List sx={{ height: "40%", bgcolor: "white", borderRadius: "1vh", margin: "2vh", overflow: "auto", userSelect: 'none' }}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{fontSize: "22px"}}>
                    Friends
                </ListSubheader>}>
            {contacts.map((contact, index) => {
                return (
                    <div
                        key={contact._id}
                        onClick={() => changeCurrentChat(index, contact)}
                        className={(index === currentSelected) ? classes.Selected : classes.NotSelected}
                    >
                        <ListItem alignItems="flex-start" sx={{ padding: "0" }}>
                            <ListItemButton sx={{
                                borderRadius: "1vh"
                            }}>
                                <ListItemAvatar>
                                    <Avatar alt={`${contact.username}`} src={`${contact.avatar}`} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${contact.username}`}
                                />
                            </ListItemButton>

                        </ListItem>
                        <Divider variant="middle" component="li" />
                    </div>
                )
            })}
        </List>
    )
}

export default Contacts