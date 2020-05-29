const express = require('express')

const User = require('../model/user')
const router = express.Router()


router.get('/', (req,res)=>{
    User.find({})
      .then((data)=>{
      console.log(data) 
      res.json(data)})
      .catch((error)=>{console.log('Oops! error fetching users', error)})

})

router.post('/',(req,res)=>{
    console.log(req.body)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    user.save()
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json({msg:err})})

})

// GET SPECIFIC USER
router.get('/:id',(req,res)=>{
    User.findById(req.params.id)
    .then((post)=>{res.json(post)})
    .catch((err)=>{res.json({msg: err})})
})


// DELETE USER
router.delete('/:id',(req,res)=>{
   User.findByIdAndDelete({_id:req.params.id})
   .then(()=>{res.json({success:true})})
   .catch(()=>{res.json({success: false})})
})
  


// Update
router.patch('/:id',(req,res)=>{
    const user={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    User.findByIdAndUpdate({_id: req.params.id}, {$set:user}, {new:true},)
    .then((user)=>{console.log('User info updated ', user)
    res.json(user)})
    .catch(()=>{res.json({success:false})})
})

module.exports = router








