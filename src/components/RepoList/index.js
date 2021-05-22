import React, { useState } from "react";
import { Box } from "grommet";
import { useQuery } from "react-query";
import Error from "../Error";
import Search from "../Search";
import Loading from "./Loading";
import Empty from "./Empty";
import ListItem from "./ListItem";
import { filterRepos } from "./utils";
import { fetchRepos } from "../../api";

const RepoList = () => {
  const [searchString, setSearchString] = useState("");
  const {
    data = [],
    error,
    isLoading,
    isSuccess,
    isError,
  } = useQuery("fetchRepos", fetchRepos, { retry: 2, refetchInterval: 10000 });
  const filteredRepos = filterRepos(data.repos, searchString);
  const isEmpty = filteredRepos?.length === 0;
  return (
    <Box gap="small">
      {isError && <Error message={error.message} />}
      {isLoading && <Loading />}
      {isSuccess && (
        <Box>
          <Box margin={{ vertical: "medium" }} width="xlarge">
            <Search
              value={searchString}
              onChange={setSearchString}
              placeholderText={`Search ${data.repos.length} repositories...`}
            />
          </Box>
          <Box align="center" gap="medium">
            {!isEmpty ? (
              filteredRepos.map(
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
              )
            ) : (
              <Empty message="No matching repositories" />
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RepoList;
