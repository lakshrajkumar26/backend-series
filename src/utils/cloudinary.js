import {v2 as cloudinary} from "cloudinary";
import { response } from "express";
import fs from "fs";


// code for cloudinary 
    // Configuration
    cloudinary.config({ 
        cloud_name:  process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:  process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
    const uploadOnCloudinary = async (localFilePath) =>{
        try{
            //upload the file on cloud
            if(!localFilePath) return null
            const response = await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })


            //file has been uploaded successfully

            console.log("file is uploaded on cloudinary",response.url);
            return response;
        }

        catch(error){
            fs.unlinkSync(localFilePath)
            
            //remove the locally saved file as the upload operation got failed
            return null;

        }
    }

    export {uploadOnCloudinary}
     