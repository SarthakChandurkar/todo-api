require('dotenv').config()

const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

const mongoose = require('mongoose')
const dbConn = require("./config/dbConn")

const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const cookieParser = require("cookie-parser")
const setHeaders = require("./middleware/setHeaders")

const path = require('path')

const logEvents = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const logger = require('./config/logger')

dbConn()
app.use(setHeaders)
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use(cookieParser())

app.use(logEvents)


app.use("/todos",require("./routes/todos"))
app.use("/daily",require("./routes/daily.js"))
app.use("/weekly",require("./routes/weekly.js"))


app.use(errorHandler)

mongoose.connection.once('open',()=>{
    console.log("Connected to MongoDB")
    app.listen(PORT,()=>{
        console.log(`Server is Up on PORT ${PORT}`)
    })
})

mongoose.connection.on('error',(err)=>{
    logger(err,"err.log")
})