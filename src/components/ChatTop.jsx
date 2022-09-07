import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Button, Paper, Avatar, IconButton, Typography, Menu, Card, CardContent } from '@mui/material'
import ChatTopStyle from './ChatTopStyle';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
import DeleteIcon from '@mui/icons-material/Delete';
import { userDeleteRoute } from '../api/ApiRoutes';
import axios from 'axios';

const ChatTop = ({ currentChatter, setCurrent, currentUser }) => {
  const classes = ChatTopStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sex = (sex) => {
    if (sex === "Male") {
      return <MaleIcon sx={{ color: "#1F45FC" }} fontSize='large' />
    }
    else if (sex === "Female") {
      return <FemaleIcon sx={{ color: "#FF0000" }} fontSize='large' />
    }
    else {
      return <TransgenderIcon sx={{ color: "#FF00FF" }} fontSize='large' />
    }
  }

  const deleteFriend = async (currentUser, targetUser) => {
    const { data } = await axios.post(`${userDeleteRoute}/${currentUser}`, {id: targetUser});
    if (data.status === false) {
        console.error(data.error)
    }
    if (data.status === true) {
        localStorage.setItem('chat-app-user-logined', JSON.stringify(data.resultAdd));
        setCurrent(data.resultAdd)
    }
}

  return (
    <>
      <Paper position="fixed" sx={{ bgcolor: "white", margin: "2vh 2vw 0 2vw" }}>
        <div className={classes.Top}>
          <div className={classes.AvatarName}>
            <Avatar alt={`${currentChatter.username}`} src={`${currentChatter.avatar}`} />
            <Typography>{currentChatter.username}</Typography>
          </div>
          <IconButton edge="end" onClick={handleButtonClick}>
            <PermIdentityIcon />
          </IconButton>
          <Menu id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                transform: 'translateX(-2.5vw) translateY(3vh)',
              }
            }}
          >
            <Card sx={{ width: "350px", userSelect: "none" }}>
              <CardContent>
                <div className={classes.UserInfoSecond}>
                  <div className={classes.UserInfo}>
                    <Avatar alt={`${currentChatter.username}`} src={`${currentChatter.avatar}`} />
                    <Typography variant="h6">{currentChatter.username}</Typography>
                  </div>
                  {sex(currentChatter.gender)}
                </div>
                <div className={classes.AboutMe}>
                  <Typography variant="h6">About Me:</Typography>
                  {(currentChatter.aboutme === "") ?
                    <Typography color="text.secondary" sx={{ wordWrap: "break-word", marginTop: "1vh" }}>This user is too lazy to leave anything...</Typography>
                    :
                    <Typography sx={{ wordWrap: "break-word", marginTop: "1vh" }}>{currentChatter.aboutme}</Typography>
                  }
                </div>


                <Button color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={(e) => {deleteFriend(currentUser._id, currentChatter._id)}}>
                  Delete Friend
                </Button>
              </CardContent>
            </Card>
          </Menu>
        </div>
      </Paper>
    </>

  )
}

export default ChatTop