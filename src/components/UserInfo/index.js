import React from 'react';
import {Box, Heading, Text} from "grommet";
import {useQuery} from "react-query";
import {fetchUser} from "../../api";
import {setLocation} from "../../api/utils";
import Error from "../Error";

const UserInfo = () => {
  const {
    data: user,
    error,
    isSuccess,
    isError,
  } = useQuery("fetchUser", fetchUser, { retry: 2 });
  return (
    <Box margin={{ bottom: 'medium' }}>
      {isError && <Error message={error.message} />}
      {isSuccess && (
        <Box direction='row' gap='small' onClick={() => setLocation(user.htmlUrl)}>
          <Box
            width='xsmall'
            height='xsmall'
            round='large'
            background={`url(${user.avatarUrl})`}
            margin={{ right: 'small' }}
          />
          <Box>
            <Heading level={1} margin={{ top: 'none', bottom: 'small' }}>
              {user.login}
            </Heading>
            {user.bio && <Text>{user.bio}</Text>}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UserInfo;
