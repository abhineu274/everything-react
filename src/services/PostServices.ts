import axios from "axios";
import { IPost } from "../models/PostModels";

const apiUrl = process.env.REACT_APP_API_URL;

export async function fetchPosts(): Promise<IPost[]> {
  const response = await axios.get(`${apiUrl}/posts`);
  const posts: IPost[] = await response.data;
  return posts;
}
