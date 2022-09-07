const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute')
const messageRoutes = require('./routes/messageRoute')
const socket = require('socket.io')
require('dotenv').config()

const hostname = 'fakevin666.com';
const port = 3000;


const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);

mongoose.connect('mongodb+srv://fakevin:Qinyang2_0_0_0@cluster0.pc4qrok.mongodb.net/KevinChatRoom', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => [
    console.log('Mongoose connected')
]).catch(error => {
    console.error(error)
});

const server = app.listen(hostname,port, () => {
    console.log(`successfully start the app at port http://${hostname}:${port}/`)
});

const io = socket(server, {
    cors: {
        origin: `http://${hostname}:${port}/`,
        credentials: true,
    },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });
    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.receiver);
        console.log(sendUserSocket)
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-receive", data.message);
        }
    });
});