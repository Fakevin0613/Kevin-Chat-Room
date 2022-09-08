import React, { useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Menu, Input, List, ListItem, ListSubheader, ListItemText, ListItemAvatar, Avatar, Divider, Typography, TextField } from '@mui/material'
import ContactsStyle from './ContactsStyle';
import axios from 'axios'
import { userRequestRoute } from '../api/ApiRoutes';
import FemaleIcon from '@mui/icons-material/Female';
import SearchIcon from '@mui/icons-material/Search';
import { userSearchContactsRoute } from '../api/ApiRoutes';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
import { useState } from 'react';

const Contacts = ({ contacts, current }) => {
    const classes = ContactsStyle()
    const [keyword, setKeyword] = useState("");
    const [searchResult, setSearchResult] = useState([]);



    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const disableAdd = (event) => {
        event.currentTarget.disabled = true;
    };

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

    const addFriend = async (currentUser, targetUser) => {
        const { data } = await axios.post(`${userRequestRoute}/${currentUser}`, { id: targetUser });
        if (data.status === false) {
            console.error(data.error)
        }
    }

    const handleSearch = (e) => {
        setKeyword(e.target.value)
        setAnchorEl(e.currentTarget);
    }

    useEffect(() => {
        async function getSearch(keyword) {
            if (keyword !== "") {
                const data = await axios.post(`${userSearchContactsRoute}/${current}`, { keyword: keyword })
                console.log(data)
                setSearchResult(data.data);
            }
        }
        getSearch(keyword);
    }, [keyword])

    return (
        <>
            <List sx={{ minWidth: "250px", height: "40vh", bgcolor: "#F5F5F5", borderRadius: "1vh", margin: "2vh", overflow: "auto", userSelect: 'none' }}
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        <div className={classes.SearchExplore}>
                            <Typography variant='h5'>Explore</Typography>
                            <div>
                                <Input sx={{ width: "12vw" }}
                                    placeholder="Looking for someone?"
                                    value={keyword}
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>

                    </ListSubheader>}>
                <Divider component="li" />
                {(keyword !== "") ?
                searchResult.map((contact, index) => {
                    return (
                        <div
                            key={contact._id}
                        >
                            <ListItem alignItems="flex-start"
                                secondaryAction={
                                    <button className={classes.addButton} onClick={(e) => { disableAdd(e); addFriend(current, contact._id) }}>
                                        <AddIcon />
                                    </button>
                                }>
                                <ListItemAvatar>
                                    <Avatar alt={`${contact.username}`} src={`${contact.avatar}`} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div style={{display: "flex"}}>{contact.username}<div>{sex(contact.gender)}</div></div>}
                                    secondary={`${contact.programs}`}
                                />
                            </ListItem>
                            <Divider variant="middle" component="li" />
                        </div>
                    )
                })

                :

                contacts.map((contact, index) => {
                    return (
                        <div
                            key={contact._id}
                        >
                            <ListItem alignItems="flex-start"
                                secondaryAction={
                                    <button className={classes.addButton} onClick={(e) => { disableAdd(e); addFriend(current, contact._id) }}>
                                        <AddIcon />
                                    </button>
                                }>
                                <ListItemAvatar>
                                    <Avatar alt={`${contact.username}`} src={`${contact.avatar}`} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div style={{display: "flex"}}>{contact.username}<div>{sex(contact.gender)}</div></div>}
                                    secondary={`${contact.programs}`}
                                />
                            </ListItem>
                            <Divider variant="middle" component="li" />
                        </div>
                    )
                })

                }
            </List>
        </>

    )
}

export default Contacts