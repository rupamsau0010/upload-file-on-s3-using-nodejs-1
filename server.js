// Initialize packages
require("dotenv").config()
const express = require("express")
const multer = require("multer")

// Rename express as app
const app = express()

// Multer storage
const storage = multer.memoryStorage({
    destination: function(req, file, callback){
        callback(null, "")
    }
})

// Multer middleware
const upload = multer({storage}).single("image")

// Besic routes
app.post("/upload", upload, (req, res) => {
    console.log(req.file)
    
    res.send({
        message: "Hello world"
    })
})

// Initialize port
const port = 5000

// Running server on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
