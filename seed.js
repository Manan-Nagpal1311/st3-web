const mongoose=require('mongoose');
const Blog=require('./models/Blog');

const Dummy_blogs = [
    {
        name: 'Mental Health',
        title:'Tpoic 1',
        desc:'Take care'
    },
    {
        name: 'Women Health',
        title:'Tpoic 2',
        desc:'Awareness'
    }
   
];

const seedDB=async()=>{
    await Blog.deleteMany({});
    await Blog.insertMany(Dummy_blogs);
    console.log('DB Seeded');
}


module.exports=seedDB;