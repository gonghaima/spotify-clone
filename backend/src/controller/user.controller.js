import { User } from '../models/user.model.js';
import { Message } from "../models/message.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const currentUserId = req?.auth?.userId || req.headers['userid'];
    const users = await User.find({ clerkId: { $ne: currentUserId } });
    console.log("🚀 ~ getAllUsers ~ currentUserId:", currentUserId)
    // const users = await User.find({ clerkId: currentUserId });
    res.status(200).json(users);
    console.log("🚀 ~ getAllUsers ~ users:", users)
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    console.log("🚀 ~ getMessages ~ req.auth:", req.auth)
    // const myId = req.auth.userId;
    const myId = req.headers.authorization.userId;
    console.log("🚀 ~ getMessages ~ myId:", myId)
    const { userId } = req.params;
    console.log("🚀 ~ getMessages ~ userId:", userId)

    const messages = await Message.find({
      $or: [
        { senderId: userId, receiverId: myId },
        { senderId: myId, receiverId: userId },
      ],
    }).sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    console.log("🚀 ~ getMessages ~ error:", error)
    next(error);
  }
};
