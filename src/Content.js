import React, { Fragment } from "react";
import { Box } from "grommet";
import RepoList from "./components/RepoList";
import Error from "./components/Error";
import { parseUserFromLocation } from "./api/utils";
import UserInfo from "./components/UserInfo";

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
        <Error message="Invalid path. Please a path in the form /{username}." />
      )}
    </Box>
  );
};

export default Content;
