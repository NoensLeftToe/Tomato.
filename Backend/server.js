import express from "express"
import cors from "cors"
import { connectDB } from "./Config/db.js"
import foodRouters from "./routes/foodRoutes.js"


//app config
const app = express()
const port = 4000

// Middleware

app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouters)


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
    
})
//mongodb+srv://swetanegi208:oneD2011@cluster0.2aezu.mongodb.net/?