// imports 
import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser"


const app = express();

//middlewares
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: true
    }
));

//common middlewares
// app.use(express.urlencoded({ extended: true, limit: '50kb' }));// for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(express.static('public')); // for the static files or images
app.use(cookieParser());


// import routes
import userRoutes from "./routes/user.routes.js"
import BooksRoutes from "./routes/booksRoutes.js"
import genreRoutes from "./routes/genreRoutes.js";
import publisherRoutes from "./routes/publisherRoutes.js";
//routes
app.use("/api/user",userRoutes);
app.use("/api/books",BooksRoutes);
app.use("/api/genre",genreRoutes);
app.use("/api/publishers",publisherRoutes);




export default app;
