const express = require('express');
const app = express();
const port = process.env.PORT
const CreateDB = require(".src/config/connection")
const User = require("./schema/userSchema.js")
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json())

app.post("/addUser", async (req, res) => {
    try {
        await User.create(req.body)
        res.status(200).json({
            status: true,
            message: "User add successfully"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})

app.get("/getUser", async (req, res) => {
    try {
        const data = await User.find()
        res.status(200).json({
            status: true,
            message: "User get successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})

app.delete("/deleteUser/:id", async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: true,
            message: "User deleted successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})

app.put("/updateUser/:id", async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            status: true,
            message: "User updated successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})
CreateDB()
app.listen(port, () => {
    console.log("Server is runing ");
})