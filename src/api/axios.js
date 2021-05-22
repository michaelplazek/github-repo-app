import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` },
});
