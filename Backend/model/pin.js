const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    title:{
        type:String,
        required:true,
        
    },
    desc:{
        type:String,
        required:true,
        min:3
        
    },
    rating:{
        type:String,
        required:true,
        min:0,
        max:5
    },
    lat:{
        type:Number,
        require:true,
    },
    long:{
        type:Number,
        require:true,
    }
},
{timestamps :true}
)
module.exports = mongoose.model('Pin',PinSchema);  //exporting the model