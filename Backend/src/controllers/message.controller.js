import { Conversation } from "../models/coversation.model.js";
import { Message } from "../models/message.model.js"

const sendMessage=async(req,res)=>{
    const {recieverId}=req.params;
    const {message}=req.body
    const senderId=req.user._id // isLoggedIn

    let conversation= await Conversation.findOne({
        participants: {$all:[senderId,recieverId]}  // both exist 
    })
    
    if(!conversation){
        conversation=await Conversation.create({
            participants:[senderId,recieverId]
        })
    }

    const newMessage=await Message.create({
        senderId,
        recieverId,
        message
    })

    if(newMessage){
        conversation.messages.push(newMessage._id)
    }

    await conversation.save()
    await newMessage.save()

    // await Promise.all([conversation.save(),newMessage.save()])  optimised Way

    return res.status(200).json(newMessage)
}

const getMessage=async(req,res)=>{
    const {id:chatProfile}=req.params
    const senderId =req.user._id

    const conversation=await Conversation.findOne({
       participants:{ $all:[chatProfile,senderId] } 
    }).populate("messages") // extract the value of messages from message model with _id strored in conversation model i.e NOT REFERENCE BUT ACTUAL MESSAGES

    if(!conversation){
        return res.status(200).json({
            message:"Start new Chat"
        })
    }

    
    // console.log(conversation.messages[0].message)

    return res
    .status(200)
    .json({
        message:conversation.messages
    })

}


export {sendMessage,getMessage}