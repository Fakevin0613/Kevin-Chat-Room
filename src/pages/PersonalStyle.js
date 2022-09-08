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
    },
    AvatarDiv:{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: "2vh"
    },
    AboutMeDiv: {
        height: "40%",
        marginTop: "1vh",
        marginBottom: "3vh"
    },
    ExploreDiv: {
        marginTop: "3vh",
        marginBottom: "3vh"
    },
    GenderDiv: {
        marginBottom: "3vh"
    },
    ProgramsDiv: {
        marginTop: "1vh",
        marginBottom: "3vh"
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
    Programs: {
        width: "92.5%",
        height: "16px",
        background: "#e0dede",
        justifyContent: "center",
        display: "flex",
        padding: "1.5vh",
        border: "none",
        outline: "none",
        borderRadius: "1vh",
        fontSize: "16px",
        resize: "none",
    },
    
})

export default personalStyle