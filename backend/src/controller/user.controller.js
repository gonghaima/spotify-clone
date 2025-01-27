import { User } from '../models/user.model.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const currentUserId = req?.auth?.userId || req.headers['userid'];
    // const users = await User.find({ clerkId: { $ne: currentUserId } });
    const users = await User.find({ clerkId: currentUserId });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
