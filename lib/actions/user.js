import User from "../models/user.models";
import { connectDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    await connectDB();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_addresses[0].email_address,
          username: username,
        },
      },
      { upsert: true, new: true } // if user doesn't exist, create a new one
    );

    await user.save();
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connectDB();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.error(error);
  }
};