import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export async function fetchPosts(): Promise<any> {
  const response = await axios.get(`${apiUrl}/posts`);
  return response;
}
