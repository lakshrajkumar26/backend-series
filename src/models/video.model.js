const mongoose =require("mongoose");
const mongooseAggregatePaginate =reqiure("mongoose-aggregate-paginate-v2")

const videoSchema =new mongoose.Schema({

    videoFile:{   
        type:String,    //cloudinary url
        required:true
    },
    thumbnail:{
        type:String,
        required:true  //cloudinary url
    },
     title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    views:{
        type:String,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
},{
    timestamps:true
})

videoSchema.plugin(mongoose-aggregate-paginate-v2) //aggregation pipeline

const Video=mongoose.model("Video",videoSchema)
                  //model ka naam ,kispe based hoga 
export default Video