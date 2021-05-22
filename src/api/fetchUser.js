import axios from "./axios";
import pick from "lodash/fp/pick";
import compose from "lodash/fp/compose";
import { convertToCamelCase, parseUserFromLocation } from "./utils";

const transformUserData = compose(
  convertToCamelCase,
  pick(["avatar_url", "html_url", "bio", "login"])
);

const fetchUser = async () => {
  const user = parseUserFromLocation();
  if (user) {
    const { data } = await axios.get(`/users/${user}`);
    return transformUserData(data);
  }
};

export default fetchUser;
