import { makeStyles } from "@mui/styles";


const ChatMiddleStyle = makeStyles({
    Middle: {
        justifyContent: "flex-start",
        display: "flex",
        flexDirection: "column",
        margin: "1vh",
    },
    Sender: {
        width: "100%",
        marginBottom: "1vh", 
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: "1vw",
    },
    Receiver: {
        width: "100%",
        display: "flex",
        marginBottom: "1vh", 
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: "1vw",
    }
});

export default ChatMiddleStyle;