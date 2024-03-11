import connectToDb from "./connectToDb";
import { Post, User } from "./models";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    console.log("Got data");
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts", error);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post", error);
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user", error);
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find(id);
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users", error);
  }
};
