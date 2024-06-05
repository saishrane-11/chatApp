const mongoose = require('mongoose');
const URI = 'mongodb+srv://saish:saish@cluster0.lxyiusq.mongodb.net/chatApp?retryWrites=true&w=majority&appName=Cluster0'
const connectDb = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("Database Connected Successfully");        
    }catch(error){
        console.log("Database not Connected")
    }
}
module.exports = connectDb;
