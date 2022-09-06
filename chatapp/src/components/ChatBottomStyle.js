import { makeStyles } from "@mui/styles";


const ChatBottomStyle = makeStyles({
    Bottom: {
        paddingLeft: "1vw",
        paddingRight: "1vw",
        userSelect: "none",
        display: "flex",
        flexDirection: "row",
        margin: "1vh",
        alignItems: "center",
        gap: "15px",
        justifyContent: "space-between"
    },
});

export default ChatBottomStyle;