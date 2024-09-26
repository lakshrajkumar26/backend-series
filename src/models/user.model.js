const mongoose =require("mongoose");
const jwt=require("jsonwebtoken");
import bcrypt from "bcrypt";
//direct encypyt krn possible ni h toh help lenge hooks ki 
// like Pre hook


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
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String, //clodinary url ,like aws photos video upload krke url dedeta h
        required:true,
    },
    coverImage:{
        type:String,
    },watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }
    ],
    password:{
        type:String,
        required:[true,'Password is required'] //true ke saath custom error msg bhi de skte ho
    },
    refreshToken:{
        type:String
    }
      
},{    
    timestamps:true
    })
 //6:49:54 *** IMP
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password,10)
    next()
})    
userSchema.methods.isPasswordCorrect =async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
   return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        FullName:this.fullName
    },
          process.env.ACCESS_TOKEN_SECRET,
    {
          expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.generateRefreshToken=function(){

    return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        FullName:this.fullName
    },
          process.env.REFRESH_TOKEN_SECRET,
    {
          expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

const User = mongoose.model("User",userSchema)

export default User;