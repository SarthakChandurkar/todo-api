const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    dueDate:{
        type:String
    },
    type:{
        type:String,
        default:"daily"
    }
})

module.exports = mongoose.model('Todo',todoSchema)