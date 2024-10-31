import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body; // Ensure 'message' is in the request body
        const { id: receiverId } = req.params; // Extract receiverId from params
        const senderId = req.user._id; // Assuming this is already an ObjectId

        // Validate message and receiverId before proceeding
        if (!message || !receiverId) {
            return res.status(400).json({ error: "Message and receiverId are required." });
        }

        // Find existing conversation
        let conversation = await Conversation.findOne({
            participant: { $all: [senderId, receiverId] },
        });

        // Create a new conversation if it doesn't exist
        if (!conversation) {
            conversation = await Conversation.create({
                participant: [senderId, receiverId],
            });
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId, // Use the correct variable name
            message,
        });

        // Save the new message to the database
        await newMessage.save();

        // Push the new message's ID into the conversation's messages array
        conversation.messages.push(newMessage._id); // Make sure you're using the correct field name

        // Save the updated conversation
        await conversation.save();
        console.log("Request Body:", req.body);
        console.log("Receiver ID:", receiverId);
        
        // Respond with the new message
        res.status(201).json({ newMessage });
    } catch (error) {
        console.log("error in SendMessage controller: ", error.message);
        res.status(500).json({ error: "internal server error" });
    }
};
export const getMessages = async (req, res) =>{
    try{
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participant: {$all: [senderId, userToChatId]},
        }).populate('messages');
        if(!conversation) return res.status(200).json([]);
        res.status(200).json(conversation.messages);
    }catch(error) {
        console.log("error in getMessage controller: ", error.message);
        res.status(500).json({ error: "internal server error" });
    }
}