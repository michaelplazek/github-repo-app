import axios from './axios';
import pick from 'lodash/fp/pick'
import {parseUserFromLocation} from "../utils";

const transformUserData = pick([
  'avatar_url',
  'html_url',
  'public_repos',
  'bio',
  'name',
  'email',
])

export default async () => {
  const user = parseUserFromLocation();
  console.log(user);
  const { data } = await axios.get(`users/${user}`);
  return transformUserData(data);
}
