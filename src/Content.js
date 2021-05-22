import React, { Fragment } from "react";
import { Box } from "grommet";
import RepoList from "./components/RepoList";
import Error from "./components/Error";
import UserInfo from "./components/UserInfo";
import { parseUserFromLocation } from "./api";

const Content = () => {
  const validPath = parseUserFromLocation();
  return (
    <Box align="center" justify="center" margin="large">
      {validPath ? (
        <Fragment>
          <UserInfo />
          <RepoList />
        </Fragment>
      ) : (
        <Error message="Invalid path. Please enter a path in the form /{username}." />
      )}
    </Box>
  );
};

export default Content;
