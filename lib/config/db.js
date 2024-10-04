import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://krishsatasiya:6353112999@cluster0.hrp5y.mongodb.net/blog-app');
    console.log("DB Connected");
}