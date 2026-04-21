const express = require('express');
const app = express();
const port = process.env.PORT
const CreateDB = require("./config/connection.js")
const User = require("./schema/userSchema.js")
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json())

// user router
app.use("/api/auth/", require("./router/userRouter.js"))

CreateDB()
app.listen(port, () => {
    console.log("Server is runing ");
})