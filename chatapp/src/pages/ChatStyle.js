import { makeStyles } from "@mui/styles";

const ChatStyle = makeStyles({
    Container: {
        height: "100vh",
        width: "100vw",
        display: "grid",
        gridTemplateColumns: "30% 70%",
    },
    Small: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px"
    }
});

export default ChatStyle