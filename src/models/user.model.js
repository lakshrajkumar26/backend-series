const mongoose =require("mongoose");

const userSchema =mongoose.Schema=new Schema ({

    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    
    

})

const User =mongoose.model("User",userSchema)

export default User;