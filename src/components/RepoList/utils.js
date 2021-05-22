import filter from 'lodash/filter';

const isMatch = (field, searchString) => (item) => item[field]?.toLowerCase().indexOf(searchString.toLowerCase()) > -1;

export const filterRepos = (repos, searchString) => {
  if(searchString === '') return repos;
  const nameMatch = isMatch('name', searchString);
  const descriptionMatch = isMatch('description', searchString);
  const languageMatch = isMatch('language', searchString);
  return filter(repos, item => nameMatch(item) || descriptionMatch(item) || languageMatch(item));
}
