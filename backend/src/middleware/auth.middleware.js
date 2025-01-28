import { clerkClient } from '@clerk/express';

export const protectRoute = async (req, res, next) => {
  ///req.headers.authorization
  // if (!req?.auth?.userId) {
  if (!req?.headers?.authorization) {
    return res
      .status(401)
      .json({ message: 'Unauthorized - you must be logged in' });
  }
  next();
};

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUserId = req?.auth?.userId || req.headers['userid'];
    console.log('🚀 ~ requireAdmin ~ currentUserId:', currentUserId);
    const currentUser = await clerkClient.users.getUser(currentUserId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

    if (!isAdmin) {
      return res
        .status(403)
        .json({ message: 'Unauthorized - you must be an admin' });
    }

    next();
  } catch (error) {
    next(error);
  }
};
