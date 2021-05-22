import axios from "./axios";
import pick from "lodash/fp/pick";
import map from "lodash/fp/map";
import compose from "lodash/fp/compose";
import { convertToCamelCase, parseUserFromLocation } from "./utils";

const transformRepoData = compose(
  map(convertToCamelCase),
  map(
    pick([
      "html_url",
      "created_at",
      "name",
      "description",
      "language",
      "languages_url",
      "stargazers_count",
      "id",
    ])
  )
);

export const getNextLink = (headers) => {
  const linkTag = headers.link.split(";")[0];
  // :shrug:
  return linkTag.replace("<", "").replace(">", "");
};

const fetchRepos = async ({ pageParam }) => {
  let data, headers;
  if (!pageParam) {
    const user = parseUserFromLocation();
    if (user) {
      const response = await axios.get(`users/${user}/repos`);
      data = response.data;
      headers = response.headers;
    }
  } else {
    const response = await axios.get(pageParam.nextLink);
    data = response.data;
    headers = response.headers;
  }
  return {
    repos: transformRepoData(data),
    nextLink: getNextLink(headers),
  };
};

export default fetchRepos;
