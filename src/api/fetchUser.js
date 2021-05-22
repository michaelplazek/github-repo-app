import axios from './axios';

export default async (user) => {
  const { data } = await axios.get(`users/${user}`);
  console.log(data);
  return data;
}
