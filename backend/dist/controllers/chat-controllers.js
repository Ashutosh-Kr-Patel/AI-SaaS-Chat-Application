// import { NextFunction, Request, Response } from "express";
// import User from "../models/User.js";
// import { configureOpenAI } from "../config/openai-config.js";
// // import { ChatCompletionRequestMessage} from "openai"; 
// // import  OpenAIApi from "openai";
// // import  type { ChatCompletionRequestMessage }  from "openai";
import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({
                message: "User not registered OR Token malfunctioned",
            });
        }
        // grab chats of user
        const chats = user.chats.map((chat) => ({
            role: chat.role,
            content: chat.content,
        }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        // send all chats with new one to Gemini API
        const openai = configureOpenAI();
        // get latest response
        const chatResponse = await openai.chat.completions.create({
            model: "google/gemma-3n-e2b-it:free", // ✅ Use Gemma 3n
            messages: chats,
        });
        user.chats.push(chatResponse.choices[0].message);
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.error("OpenRouter Error:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
export const sendChatsToUser = async (req, res, next) => {
    try {
        //User token check
        const user = await User.findById(res.locals.jwtData.email.id);
        if (!user) {
            return res.status(401).send("User not registered OR Token malfunctioned");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }
        return res
            .status(200)
            .json({ message: "OK", chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const deleteChats = async (req, res, next) => {
    try {
        //User token check
        const user = await User.findById(res.locals.jwtData.email.id);
        if (!user) {
            return res.status(401).send("User not registered OR Token malfunctioned");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }
        //@ts-ignore
        user.chats = [];
        await user.save();
        return res.status(200).json({ message: "OK" });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=chat-controllers.js.map