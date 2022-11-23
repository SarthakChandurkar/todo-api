const logger = require("../config/logger")
const logEvents = (req,res,next) =>{
    const message = `${req.method} ${req.url} ${req.headers.origin}`
    console.log(message)
    logger(message,"req.log")
    next()
}
module.exports = logEvents