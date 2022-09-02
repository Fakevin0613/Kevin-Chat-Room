import { makeStyles } from "@mui/styles";

const personalStyle = makeStyles({
    Overall:{
        margin: "auto",
        verticalAlign: "middle",
        display: "flex",
        justifyContent: "center",
    },
    Box: {
        margin: "0",
        padding: "5vh",
        height: "650px",
        width: "500px",
        boxShadow: "5px 10px 20px #000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "2.5vh",
        userSelect: "none",
        background: "#fff",
        gap: "1vh",
    },
    AvatarDiv:{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    AboutMeDiv: {
        height: "40%",
    },
    AboutMe: {
        width: "92.5%",
        height: "90%",
        background: "#e0dede",
        justifyContent: "center",
        display: "flex",
        padding: "1.5vh",
        border: "none",
        outline: "none",
        borderRadius: "2vh",
        fontSize: "16px",
        resize: "none",
    },
    Button: {
        width: "50%",
        height: "40px",
        margin: "10px auto",
        justifyContent: "center",
        display: "block",
        color: "#ffffff",
        background: "#500979",
        fontSize: "1em",
        fontWeight: "bold",
        outline: "none",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    
})

export default personalStyle