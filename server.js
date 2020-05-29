const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const app =express()
const PORT = process.env.PORT || 5000
const postRoutes = require('./routes/postRoutes')
const keys = require('./config/keys')

// const MONGO_URI = 'mongodb+srv://saalih:123saalih@cluster0-iz6tq.mongodb.net/test?retryWrites=true&w=majority'
// 'mongodb://localhost/mern-blog-post'
mongoose.connect(keys.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false})
.then(() => console.log('DataBase Connected...'))
.catch((err) => console.error(err))


//Take Note ...Going to  production
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}





// HTTP req
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api', postRoutes)


app.listen(PORT, () => console.log(`Server Started on ${PORT}`))




