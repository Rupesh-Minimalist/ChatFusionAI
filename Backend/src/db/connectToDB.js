import mongoose from "mongoose";

const connectToDB=async()=>{

    try {

        const ConnectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/ChatFusionAI`)

        console.log(`Database is connected : ${ConnectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("Error while Connecting to DB")
        process.exit(1)
    }
}

export default connectToDB