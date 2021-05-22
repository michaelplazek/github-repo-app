import axios from './axios';
import pick from 'lodash/fp/pick'

const transformRepoData = pick([
  'html_url',
  'created_at',
  'name',
  'description',
  'language',
  'languages_url',
])

export default async (user) => {
  const { data } = await axios.get(`users/${user}/repos`);
  return transformRepoData(data);
}
