import { makeStyles } from "@mui/styles";


const BottomBarStyle = makeStyles({
    Bottom: {
        userSelect: "none",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        margin: "2vh",
        alignItems: "center",
        justifyContent: "space-between"
    },
    AvatarName: {
        display: "flex",
        flexDirection: "row",
        gap: "1vw",
        alignItems: "center",
    }
});

export default BottomBarStyle;