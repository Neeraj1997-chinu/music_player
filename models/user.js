//creating model and database
const mongoose = require('mongoose');
//creating user schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    favartist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'favArtist'
    }]
    
},{
    timestamps:true
});

const User = mongoose.model('User',userSchema);

module.exports=User;
