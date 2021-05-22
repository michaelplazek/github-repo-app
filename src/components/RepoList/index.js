import React from "react";
import { Box, Heading } from "grommet";
import ListItem from "./ListItem";
import { useQuery } from "react-query";
import { fetchRepos } from "../../api";
import Error from "../Error";
import Loading from "./Loading";

const RepoList = () => {
  const {
    data: repos,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useQuery("fetchRepos", fetchRepos, { retry: 2, refetchInterval: 10000 });
  return (
    <Box gap="small">
      {isError && <Error message={error.message} />}
      {isLoading && <Loading />}
      {isSuccess && (
        <Box>
          <Heading
            color='#9A8297'
            alignSelf="center"
            level={2}
          >{`${repos.length} Repositories`}</Heading>
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
                key={id}
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
      )}
    </Box>
  );
};

export default RepoList;
