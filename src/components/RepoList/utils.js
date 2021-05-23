import filter from "lodash/filter";
import compose from "lodash/fp/compose";
import flatMap from "lodash/fp/flatMap";
import get from "lodash/fp/get";

const isMatch = (field, searchString) => (item) =>
  item[field]?.toLowerCase().indexOf(searchString.toLowerCase()) > -1;

export const filterRepos = searchString => repos => {
  console.log(repos);
  if (searchString === "") return repos;
  const nameMatch = isMatch("name", searchString);
  const descriptionMatch = isMatch("description", searchString);
  const languageMatch = isMatch("language", searchString);
  return filter(
    repos,
    (item) => nameMatch(item) || descriptionMatch(item) || languageMatch(item)
  );
};

export const getPaginatedData = (data, searchString) =>
  compose(
    filterRepos(searchString),
    flatMap((item) => item.repos),
    get("pages")
  )(data);
