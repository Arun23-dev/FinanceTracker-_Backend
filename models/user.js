import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        
    },
    lastName:{
        type:String,
        required:true,

    },
    emailId:{
        type:String,
        unique:true,
        required:true,

    },
    password:{
        type:String,
        required:true,

    },
    image:{
        type:String,
        default:"This is my pic"
    }
  
});
const User = mongoose.model('User', userSchema);