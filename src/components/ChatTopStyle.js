import { makeStyles } from "@mui/styles";


const ChatTopStyle = makeStyles({
    Top: {
        paddingLeft: "1vw",
        paddingRight: "1vw",
        userSelect: "none",
        display: "flex",
        flexDirection: "row",
        margin: "1vh",
        alignItems: "center",
        justifyContent: "space-between"
    },
    AvatarName: {
        display: "flex",
        flexDirection: "row",
        gap: "1vw",
        alignItems: "center",
    },
    UserInfo: {
        display: "flex",
        flexDirection: "row",
        gap: "1vw",
        alignItems: "center",
        marginBottom: "1vh",
    },
    UserInfoSecond: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "1vh",
        justifyContent: "space-between"
    },
    AboutMe: {
        marginBottom: "2vh",
    },
    ButtonDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2.5vh"
    },
    
});

export default ChatTopStyle;