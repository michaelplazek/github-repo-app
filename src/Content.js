import React from "react";
import { useQuery } from "react-query";
import { fetchRepos, fetchUser } from "./api";
import { Box } from "grommet";
import RepoList from "./components/RepoList";
import Error from "./components/Error";
import {parseUserFromLocation} from "./api/utils";

const Content = () => {
  const validPath = parseUserFromLocation();
  return (
    <Box fill={true} align='center' justify='center'>
      {validPath ? (
        <RepoList />
      ) : <Error message='Invalid path. Please a path in the form /{username}.' />}
    </Box>
  );
};

export default Content;
