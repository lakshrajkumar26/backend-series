class ApiError extends Error{
    contructor(
        statusCode,
        message="Something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=messagethis.success=false;
        this.errors=this.errors
        if(statck){
            this.stack=statck
        } else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}