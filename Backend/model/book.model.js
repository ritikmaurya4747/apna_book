import mongoose,{ Schema } from "mongoose";

const bookSchema = new Schema(
    {
        name: String,
        price: Number,
        category: String,
        image: String,
        title: String
    }
)

export const Book = mongoose.model('Book',bookSchema);