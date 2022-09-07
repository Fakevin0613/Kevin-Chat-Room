import React from 'react'
import { useNavigate } from 'react-router-dom'
import { List, Typography } from '@mui/material'
import personalStyle from './PersonalStyle'
import { RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material'
import Avatar from 'react-avatar-edit'
import { useState } from 'react'
import { Avatar as AvatarPreview } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/pixel-art';
import axios from 'axios'
import { avatarRoute } from '../api/ApiRoutes'

const Personal = () => {
    const classes = personalStyle();
    const navigate = useNavigate()
    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light"
    };
    const user = JSON.parse(localStorage.getItem('chat-app-user-logined'))
    const defaultAvatar = createAvatar(style, { seed: JSON.parse(localStorage.getItem('chat-app-user-logined')).username, dataUri: true });

    const [preview, setPreview] = useState(user.avatar === "" ? defaultAvatar : user.avatar);
    const [gender, setGender] = useState(user.gender);
    const [aboutme, setAboutMe] = useState(user.aboutme);
    const [tobeexplore, setToBeExplore] = useState(user.tobeexplore);
    const [programs, setPrograms] = useState(user.programs);

    const onClose = () => {
        setPreview(defaultAvatar);
    }

    const onCrop = (preview) => {
        setPreview(preview);
    }

    const onBeforeFileLoad = (elem) => {
        if (elem.target.files[0].size > 1000000) {
            toast.error("File is too big!", toastOptions);
            elem.target.value = "";
        };
    }

    const toogleGender = (event) => {
        setGender(event.target.value);
    }

    const toogleExplore = (event) => {
        setToBeExplore(event.target.value);
    }

    const handleWrite = (e) => {
        setAboutMe(e.target.value);
    }

    const validate = () => {
        if (aboutme.length > 300) {
            toast.error("About me cannot have more than 300 characters", toastOptions);
            return false;
        }
        else {
            return true;
        }
    }

    const handlePrograms = (e) => {
        setPrograms(e.target.value);
    }

    const validatePrograms = () => {
        if (programs.length > 50) {
            toast.error("University programs cannot have more than 50 characters", toastOptions);
            return false;
        }
        else {
            return true;
        }
    }

    const handleSubmit = async (e) => {
        if (validatePrograms() && validate()) {
            const input = {
                avatar: preview,
                gender: gender,
                aboutme: aboutme,
                tobeexplore: tobeexplore,
                programs: programs,
            }
            const user = JSON.parse(
                localStorage.getItem('chat-app-user-logined')
            );

            const { data } = await axios.post(`${avatarRoute}/${user._id}`, input)
            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                console.log(data.user)
                localStorage.setItem('chat-app-user-logined', JSON.stringify(data.user));
                navigate("/chat");
            }
        }
    }

    return (
        <div className={classes.Overall}>
            <div className={classes.Box}>
                <Typography variant='h4' color="#500979">
                    Personal Information
                </Typography>

                <List sx={{ height: "54vh", overflow: 'auto' }}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Avatar:</FormLabel>
                    <div className={classes.AvatarDiv}>
                        {/* <AvatarPreview src={preview} alt="Preview" sx={{ width: 150, height: 150 }} /> */}
                        <AvatarPreview src={preview} alt="Preview" style={{ height: 125, width: 125 }} />
                        <Avatar
                            label="Too ugly!"
                            width={150}
                            height={150}
                            onCrop={onCrop}
                            onClose={onClose}
                            onBeforeFileLoad={onBeforeFileLoad}
                        />
                    </div>

                    <FormLabel id="demo-row-radio-buttons-group-label">Explore Options:</FormLabel>
                    <div>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <Typography sx={{ paddingTop: "8px", marginRight: "40px" }}>{`Allow other users find you in \"Explore\":`} </Typography>
                            <FormControlLabel value="Yes" control={<Radio sx={{
                                color: '#500979',
                                '&.Mui-checked': {
                                    color: '#500979',
                                },
                            }} />} label="Yes" onChange={toogleExplore} checked={tobeexplore === "Yes"} />
                            <FormControlLabel value="No" control={<Radio sx={{
                                color: '#500979',
                                '&.Mui-checked': {
                                    color: '#500979',
                                },
                            }} />} label="No" onChange={toogleExplore} checked={tobeexplore === "No"} />
                        </RadioGroup>
                    </div>

                    <FormLabel id="demo-row-radio-buttons-group-label">Gender:</FormLabel>
                    <div>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel value="Male" control={<Radio sx={{
                                color: '#500979',
                                '&.Mui-checked': {
                                    color: '#500979',
                                },
                            }} />} label="Male" onChange={toogleGender} checked={gender === "Male"} />
                            <FormControlLabel value="Female" control={<Radio sx={{
                                color: '#500979',
                                '&.Mui-checked': {
                                    color: '#500979',
                                },
                            }} />} label="Female" onChange={toogleGender} checked={gender === "Female"} />
                            <FormControlLabel value="Other" control={<Radio sx={{
                                color: '#500979',
                                '&.Mui-checked': {
                                    color: '#500979',
                                },
                            }} />} label="Other" onChange={toogleGender} checked={gender === "Other"} />
                        </RadioGroup>
                    </div>

                    <FormLabel id="demo-row-radio-buttons-group-label">University Program: </FormLabel>
                    <div className={classes.ProgramsDiv}>
                        <input type="text" className={classes.Programs} value={programs} onChange={handlePrograms}></input>
                    </div>

                    <FormLabel id="demo-row-radio-buttons-group-label">About Me:</FormLabel>
                    <div className={classes.AboutMeDiv}>
                        <textarea type="text" className={classes.AboutMe} value={aboutme} onChange={handleWrite}></textarea>
                    </div>

                </List>
                <button className={classes.Button} onClick={handleSubmit}>Submit</button>

            </div>

            <ToastContainer />
        </div>
    )
}

export default Personal