import React from 'react';
import {useQuery} from "react-query";
import {fetchRepos, fetchUser} from "./api";
import {Box, Heading, Text} from "grommet";
import { Star as StarIcon } from 'grommet-icons';

const Content = () => {
  useQuery('fetchUser', () => fetchUser('michaelplazek'));
  const {
    data,
    error,
    isLoading,
    isSuccess,
    isError
  } = useQuery('fetchRepo', () => fetchRepos('michaelplazek'));
  console.log(data);
  return (
    <Box
      gap='small'
    >
      {isSuccess && data.map(({
        name,
        description,
        id,
        htmlUrl,
        languagesUrl,
        stargazersCount: stars,
      }) => (
        <Box
          justify='between'
          direction='row'
          elevation='xsmall'
          margin='small'
          round='small'
          pad='medium'
          key={id}
        >
          <Box basis='3/4'>
            <Box>
              <Heading margin={{ top: 'none', bottom: 'small' }} level={3}>
                {name}
              </Heading>
            </Box>
            <Box>
              <Text>
                {description}
              </Text>
            </Box>
          </Box>
          <Box>
            <Box direction='row' align='center' gap='4px'>
              <StarIcon color='sandybrown'/>
              <Text weight='bold' size='small'>{stars}</Text>
            </Box>
            <Box>

            </Box>
          </Box>

        </Box>
      ))}
    </Box>
  );
};

export default Content;
