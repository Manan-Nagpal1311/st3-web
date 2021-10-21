const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true

    },
    title:{
        type:String,
        trim:true
    },
    desc:{
        type:String,
        trim:true
    }

});

const Blog=mongoose.model('Blog',blogSchema);

module.exports=Blog;