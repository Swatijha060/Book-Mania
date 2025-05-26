//imports
import  app  from './app.js';
import dotenv from 'dotenv';
import 'dotenv/config';
import connectDB from './db/index.js';


dotenv.config({
});




//server
const PORT=process.env.PORT
connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on  http://localhost:${PORT}`);
    })}
).catch((error)=>{
    console.log('Error connecting the server',error)
}
)