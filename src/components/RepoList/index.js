import React from "react";
import {Box} from "grommet";
import ListItem from "./ListItem";
import {useQuery} from "react-query";
import {fetchRepos} from "../../api";
import Empty from "./Empty";
import Error from "../Error";
import Loading from "./Loading";

const RepoList = () => {
  const {
    data: repos,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useQuery("fetchRepos", fetchRepos, { retry: 3 });
  return (
    <Box gap="small">
      {isError && <Error message={error} />}
      {isLoading && <Loading />}
      {isSuccess && !repos.length && <Empty />}
      {isSuccess && repos.length && repos.map(
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
  );
};

export default RepoList;
