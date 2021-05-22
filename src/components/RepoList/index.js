import React from "react";
import { Box } from "grommet";
import ListItem from "./ListItem";

const RepoList = ({ repos }) => {
  return (
    <Box gap="small">
      {repos.map(
        ({
          name,
          description,
          id,
          htmlUrl,
          language,
          stargazersCount: stars,
        }) => (
          <ListItem
            name={name}
            description={description}
            id={id}
            htmlUrl={htmlUrl}
            language={language}
            stars={stars}
          />
        )
      )}
    </Box>
  );
};

export default RepoList;
