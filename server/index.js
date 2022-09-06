const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute')
const messageRoutes = require('./routes/messageRoute')
require('dotenv').config()


const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/message", messageRoutes);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => [
    console.log('Mongoose connected')
]).catch(error => {
    console.error(error)
})

const server = app.listen(process.env.PORT, ()=>{
    console.log(`successfully start the app at port ${process.env.PORT}`)
})