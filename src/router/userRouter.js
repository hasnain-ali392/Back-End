const express = require("express")
const router = express.Router()
const User = require("../schema/userSchema.js")

// Login
router.post("/register", async (req, res) => {
    try {
        await User.create(req.body)
        res.status(200).json({
            message: "Regiter successfully",
            status: true,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})

// Register
router.post("/login", async (req, res) => {
    try {
        const FindUser = await User.find(user => user.email === req.body.email)
        if (!FindUser) {
            res.status(200).json({
                status: true,
                message: "Login successfully",
                data: FindUser
            })
        } else {
            res.status(200).json({
                status: true,
                message: "Login Faild"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})

// Edit account
router.put("/edited/:id", async (req, res) => {
    try {
        const update = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (update) {
            res.status(200).json({
                status: true,
                message: "Account updated",
                data: update
            })
        } else {
            res.status(200).json({
                status: true,
                message: "Account cant updated"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})


// Delete account
router.delete("/delete/:id", async (req, res) => {
    try {
        const eliminate = await User.findByIdAndDelete(req.params.id)
        if (!eliminate) {
            res.status(200).json({
                status: true,
                message: "Account deleted"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})