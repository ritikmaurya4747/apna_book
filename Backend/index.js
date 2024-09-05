import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express();

// ye middleware hota hain so
app.use(cors());
app.use(express.json());    // json data convert karne ke liye body se 

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
app.use('/user',userRoute)





app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
    
})