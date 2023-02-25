const { toBeRequired } = require('@testing-library/jest-dom/dist/matchers');
const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true,
    },
    tag:{
        type:String,
        default: "General"
    },
    date:{
        type:Date,
        default: Date.now
    }

  });

  modules.exports=mongoose.model('user',NotesSchema);