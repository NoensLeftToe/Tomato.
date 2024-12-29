import express from "express"
import { addFood } from "../Controllers/foodControlers.js"
import multer from "multer"


const foodRouters = express.Router()


//image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb) => {
         return cb(null,`${Date.now()}${file.originalname}`)
    }

})
const upload = multer({storage:storage})

foodRouters.post("/add",upload.single("image"),addFood)






export default foodRouters;