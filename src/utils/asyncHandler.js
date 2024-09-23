const asyncHandler =(fn) =>(req,res,next) =>{
       try {
        await fn(req,res,next){

        }
        
       } catch (error) {  //res ke baad 1 status uske aandr ek err code bhej dete h nhi paas kiya toh 500 
        //but ek json  bhi susally milega  kisme ek success flag aur message 
        res.status(err.code||500).json({
            success:false,
            message:err.message

        })
        
       }

}


// promise walla

{/*   const asyncHandler =(requestHandler) =>{
(req,res,next) =>{
    Promise.resolve(requestHandler(req,res,next)).
    catch((err)=>next(err))
}}
    */}