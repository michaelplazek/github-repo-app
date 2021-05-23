import React, { useState } from "react";
import {Box, InfiniteScroll} from "grommet";
import {useInfiniteQuery, useQuery} from "react-query";
import Error from "../Error";
import Search from "../Search";
import Loading from "./Loading";
import Empty from "./Empty";
import ListItem from "./ListItem";
import {getPaginatedData} from "./utils";
import { fetchRepos } from "../../api";

const RepoList = () => {
  const [searchString, setSearchString] = useState("");
  const {
    data = [],
    error,
    fetchNextPage,
    isLoading,
    isSuccess,
    isError,
  } = useInfiniteQuery("fetchRepos", fetchRepos, {
    getNextPageParam: (lastPage, pages) => lastPage,
    retry: false,
    refetchInterval: 10000
  });
  console.log(data);
  const filteredRepos = getPaginatedData(data, searchString);
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
              placeholderText={`Search ${filteredRepos.length} repositories...`}
            />
          </Box>
          <Box align="center">
            {!isEmpty ? (
              <InfiniteScroll
                onMore={fetchNextPage}
                steps={30}
                items={filteredRepos}
                renderMarker={Loading}
              >
                {({
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
                )}
              </InfiniteScroll>
            ) : <Empty message="No matching repositories" />}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RepoList;
