import multer from "multer";

const storage= multer.diskStorage({ 
    destination:(req,file,cb)=>{
        cb(null,"./Backend/public/temp")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)  // Because file will be stored for very few seconds
    }
})

export const upload=multer({storage:storage})