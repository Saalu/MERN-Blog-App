const mongoose  = require('mongoose')


const PostSchema = new mongoose.Schema({
    name: String,
    title:String,
    body:String,
    date:{
        type:Date,
        default:Date.now
    }
})


module.exports = Post = mongoose.model('post', PostSchema)




