import User from "../models/user.models";
import { connectDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async ({
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username,
}) => {
  try {
    await connectDB();

    const user = await User.findByIdAndUpdate(
      {
        clerkId: id,
      },
      {
        $set: {
          clerkId: id,
          firstname: first_name,
          lastname: last_name,
          profilePhoto: image_url,
          email: email_addresses[0].email_address,
          username: username,
        },
      },
      {
        upsert: true,
        new: true,
      }
    );

    await user.save();
  } catch (error) {
    console.log("Error while creating a user: ", error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connectDB();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log("Error while deleting a user: ", error);
  }
};
