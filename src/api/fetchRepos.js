import axios from './axios';
import pick from 'lodash/fp/pick';
import map from 'lodash/fp/map';
import compose from 'lodash/fp/compose';
import {convertToCamelCase} from "./utils";

const transformRepoData = compose(
  map(convertToCamelCase),
  map(pick([
    'html_url',
    'created_at',
    'name',
    'description',
    'language',
    'languages_url',
    'stargazers_count',
    'id'
  ]))
)

export default async (user) => {
  const { data } = await axios.get(`users/${user}/repos`);
  return transformRepoData(data);
}


