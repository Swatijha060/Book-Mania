
class ApiResponse{
 
    constructor(message, statusCode, data='Success'){
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
        this.success=statusCode< 400 ? true : false;
        } 
}
export default ApiResponse;
