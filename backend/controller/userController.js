const { avatarUpload, galleryUpload } = require("../utils/upload")
const user = require("./../modals/User")

exports.addAvatar = async (req, res) => {
    try {
        avatarUpload(req, res, async err => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Multer error" + err
                })
            }

            const result = await user.create({
                ...req.body,
                profile: `profile/${req.file.filename}`
            })
            res.json({
                success: true,
                message: "avatar add successfuly"
            })
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}
exports.getAllAvatars = async (req, res) => {
    try {
        avatarUpload(req, res, async err => {
            const result = await user.find()
            res.json({
                success: true,
                message: "avatar fetched successfuly",
                result
            })
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}
exports.addToGallery = async (req, res) => {
    try {
        galleryUpload(req, res, async err => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Multer error" + err
                })
            }
            const d = []
            for (let i = 0; i < req.files.length; i++) {
                d.push(`gallery/${req.files[i].filename}`)
            }
            const result = await user.create({
                ...req.body,
                docs: d
            })
            console.log("vishwajit");
            res.json({
                success: true,
                message: "avatar & gallery add successfuly"
            })
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}
exports.getAllUsers = async (req, res) => {
    try {
        avatarUpload(req, res, async err => {
           const result = await user.find()
            res.json({
                success: true,
                message: "doUserscs Featch successfuly",
                result
            })
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}
exports.destroyAllUsers = async (req, res) => {
    try {
        avatarUpload(req, res, async err => {
           const result = await user.deleteMany()
            res.json({
                success: true,
                message: "All Users delete successfuly",
                result
            })
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}