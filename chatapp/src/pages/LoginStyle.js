import { makeStyles } from "@mui/styles";

const LoginStyle = makeStyles({
    Box : {
        margin: "0",
        padding: "0",
        height: "400px",
        width: "350px",
        boxShadow: "5px 10px 20px #000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        borderRadius: "30px",
        userSelect: "none",
        background: "#fff",
    },
    Input : {
        width: "60%",
        height: "25px",
        background: "#e0dede",
        justifyContent: "center",
        display: "flex",
        padding: "10px",
        border: "none",
        outline: "none",
        borderRadius: "5px",
    },
    Button: {
        width: "60%",
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
        transition: ".2s ease-in",
        cursor: "pointer",
    },
    Link: {
        textDecoration: "none",
        color: "#00d4ff",
    }
});

export default LoginStyle;