import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://swetanegi208:oneD2011@cluster0.2aezu.mongodb.net/Meet Bowl's")
    .then(()=>console.log("DB Connected")
    )
}