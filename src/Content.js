import React from 'react';
import {useQuery} from "react-query";
import {fetchRepos, fetchUser} from "./api";
import {Box} from "grommet";
import RepoList from "./components/RepoList";

const Content = () => {
  useQuery('fetchUser', () => fetchUser('michaelplazek'));
  const {
    data: repos,
    error,
    isLoading,
    isSuccess,
    isError
  } = useQuery('fetchRepos', () => fetchRepos('michaelplazek'));
  return (
    <Box>
      {isSuccess && <RepoList repos={repos} />}
    </Box>
  );
};

export default Content;
