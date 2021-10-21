// if(process.env.NODE_ENV !== 'production')
// {
    // require('dotenv').config();
// }
// console.log(process.env.MONGO_URL);
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const seedDB=require('./seed');
const methodOverride=require('method-override');



mongoose.connect('mongodb://localhost/blog-app')
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log(err);
})


// seedDB();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const blogRoutes=require('./routes/blogRoutes.js');


app.get('/',(req,res)=>{
    res.send('home');
});

app.use(blogRoutes);


app.listen(3000,()=>{
    console.log("server started at port 3000");
});