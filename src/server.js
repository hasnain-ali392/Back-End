const express = require('express');
const app = express();
const CreateDB = require("./config/connection.js")
const User = require("./schema/userSchema.js")
const userRouter = require("./router/userRouter.js")

const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: true,
        message: "Server is runing"
    })
})

// user router
app.use("/api/auth", userRouter)

CreateDB()
app.listen(process.env.PORT, () => {
    console.log("Server is runing ");
    console.log(`http://localhost:${process.env.PORT}`);    
})