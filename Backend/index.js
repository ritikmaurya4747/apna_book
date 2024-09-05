import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from './route/book.route.js'
import cors from "cors"

const app = express();

// ye middleware hota hain so
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000
const MongoDB_URI = process.env.MongoDB_URI


// connect to MongoDB
try {
    mongoose.connect(MongoDB_URI);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error:",error);
    
}

// Defining route 
app.use('/book',bookRoute)





app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
    
})