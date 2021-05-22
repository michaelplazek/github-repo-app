import axios from './axios';
import pick from 'lodash/fp/pick'
import compose from 'lodash/fp/compose';
import map from 'lodash/fp/map';
import {convertToCamelCase, parseUserFromLocation} from "./utils";

const transformUserData = compose(
  map(convertToCamelCase),
  map(pick([
    'avatar_url',
    'html_url',
    'public_repos',
    'bio',
    'name',
    'email',
  ]))
)

export default async () => {
  const user = parseUserFromLocation();
  const { data } = await axios.get(`https://api.github.com/repos/michaelplazek/blockparty/languages`);
  return transformUserData(data);
}
