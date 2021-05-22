import axios from './axios';
import pick from 'lodash/fp/pick'

const transformUserData = pick([
  'avatar_url',
  'html_url',
  'public_repos',
  'bio',
  'name',
  'email',
])

export default async (user) => {
  const { data } = await axios.get(`users/${user}`);
  return transformUserData(data);
}
