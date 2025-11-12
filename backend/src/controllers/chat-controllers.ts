// import { NextFunction, Request, Response } from "express";
// import User from "../models/User.js";
// import { configureOpenAI } from "../config/openai-config.js";
// // import { ChatCompletionRequestMessage} from "openai"; 
// // import  OpenAIApi from "openai";
// // import  type { ChatCompletionRequestMessage }  from "openai";

// import OpenAI from "openai";
// import type { ChatCompletionMessageParam } from "openai/resources/chat";

// import { model } from "mongoose";
// export const generateChatCompletion = async ( 
//     req:Request,
//     res:Response, 
//     next:NextFunction
//  ) => {
//     const { message } = req.body;
//     try {
//         const user = await User.findById(res.locals.jwtData.id);
//     if (!user) 
//         return res
//             .status(401)
//             .json({ message: "User not registered OR Token malfunctioned" });
//     //grab chat of user 
//     // const chats = user.chats.map(({ role, content }) => ({ 
//     //     role, 
//     //     content,
//     // })) as ChatCompletionRequestMessage[];


//     const chats: ChatCompletionMessageParam[] = user.chats.map(
//       ({ role, content }: { role: "user" | "assistant"; content: string }) => ({
//         role,
//         content,
//       })
//     );



//     chats.push({ content: message, role: "user" });
//     user.chats.push({ content: message, role: "user" });

//     //send all chat with new one to openAI API
//     const config = configureOpenAI();
//     const openai = new OpenAIApi(config);

//     // get latest response
//     const chatResponse = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo", 
//         messages: chats,
//     });
//     user.chats.push(chatResponse.data.choices[0].message);
//     await user.save();
//     return res.status(200).json({ chats: user.chats});
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Something went wrong"});
//     }  
// };


















































// import { NextFunction, Request, Response } from "express";
// import User from "../models/User.js";
// // import { configureOpenAI } from "../config/openai-config.js";
// import OpenAI from "openai";
// import type { ChatCompletionMessageParam } from "openai/resources/chat";

// export const generateChatCompletion = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { message } = req.body;
//   try {
//     const user = await User.findById(res.locals.jwtData.id);

//     if (!user) {
//       return res.status(401).json({
//         message: "User not registered OR Token malfunctioned",
//       });
//     }

//     // ✅ Fix 1: Cast role properly for TS compatibility
//     const chats: ChatCompletionMessageParam[] = user.chats.map((chat: any) => ({
//       role: chat.role as "user" | "assistant",
//       content: chat.content,
//     }));

//     chats.push({ content: message, role: "user" });
//     user.chats.push({ content: message, role: "user" });

//     // ✅ Fix 2: Use correct OpenAI initialization (no OpenAIApi)
//     // const openai = configureOpenAI();


//     //  // Initialize OpenRouter with OpenAI SDK
//     const openai = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENROUTER_API_KEY!,
//       defaultHeaders: {
//         "HTTP-Referer": process.env.SITE_URL || "http://localhost:5173",
//         "X-Title": process.env.SITE_NAME || "OpenAI Chatbot",
//       },
//     });

//     // Call OpenRouter API
//     const chatResponse = await openai.chat.completions.create({
//     //   model: "gpt-3.5-turbo",
//     model: "deepseek/deepseek-v3-base:free",
//       messages: chats,
//     });

//     user.chats.push(chatResponse.choices[0].message);
//     await user.save();

//     return res.status(200).json({ chats: user.chats });
//   } catch (error) {
//     console.error("OpenRouter Error:", error);
//     return res.status(500).json({ message: "Something went wrong" });
//   }
// };






// chat-controllers.ts file (Uses Gemma Model):

import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import type { ChatCompletionMessageParam } from "openai/resources/chat";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).json({
        message: "User not registered OR Token malfunctioned",
      });
    }
    // grab chats of user
    const chats: ChatCompletionMessageParam[] = user.chats.map((chat: any) => ({
      role: chat.role as "user" | "assistant",
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
  } catch (error) {
    console.error("OpenRouter Error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};



export const sendChatsToUser = async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    try {
        //User token check
      const user = await User.findById( res.locals.jwtData.email.id);
      if (!user) {
        return res.status(401).send("User not registered OR Token malfunctioned");
      }
      console.log(user._id.toString(), res.locals.jwtData.id);

      if (user._id.toString() !== res.locals.jwtData.id) {
        return res.status(401).send("Permissions didn't match");
      }
      return res
      .status(200)
      .json({ message: "OK", chats:user.chats });
    } catch (error) {
      console.log(error);
      return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};

export const deleteChats = async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    try {
        //User token check
      const user = await User.findById( res.locals.jwtData.email.id);
      if (!user) {
        return res.status(401).send("User not registered OR Token malfunctioned");
      }
      console.log(user._id.toString(), res.locals.jwtData.id);

      if (user._id.toString() !== res.locals.jwtData.id) {
        return res.status(401).send("Permissions didn't match");
      }
      //@ts-ignore
      user.chats = [];
      await  user.save();
      return res.status(200).json({ message: "OK"});
    } catch (error) {
      console.log(error);
      return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};

