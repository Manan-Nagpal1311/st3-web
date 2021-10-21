const express=require('express');
// const { findById } = require('../models/');
const router=express.Router();
const Blog=require('../models/Blog');


router.get('/blogs',async(req,res)=>{
   const blogs= await Blog.find({});

    res.render('./blog/index',{blogs});
});

router.get('/blogs/new', (req,res)=>{
    res.render('./blog/new');
})

router.post('/blogs',async (req,res)=>{
    const newBlog={
        ...req.body
    }
    await Blog.create(newBlog);
  
    res.redirect('/blogs');
});

router.get('/blogs/:id',async(req,res)=>{
    try{
    const {id}=req.params;
    const blog= await Blog.findById(id);
    // console.log(product);
    res.render('./blog/show',{blog});
    }
    catch(e)
    {
        
        res.redirect('/error');
    }
});


router.get('/blogs/:id/edit', async(req,res)=>{
    const {id}=req.params;
    const blog=await Blog.findById(id);
    res.render('./blog/edit',{blog});
});

router.patch('/blogs/:id', async(req,res)=>{
    const updatedblog=req.body;
    // const updatedproduct=
    const {id}=req.params;
    await Blog.findByIdAndUpdate(id,updatedblog);
    res.redirect('/blogs');
});

router.delete('/blogs/:id', async(req,res)=>{
    const {id}=req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blogs');
});


module.exports=router;