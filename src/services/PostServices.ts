import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export async function fetchPosts(): Promise<any> {
  const response = await axios.get(`${apiUrl}/posts`);
  return response;
}

export async function createPost(data: any): Promise<any> {
  const response = await axios.post(`${apiUrl}/posts`, data);
  return response;
}
