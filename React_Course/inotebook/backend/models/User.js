const { toBeRequired } = require('@testing-library/jest-dom/dist/matchers');
const mongoose = require('mongoose');

const UserSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }

  });

  modules.exports=mongoose.model('user',UserSchema);