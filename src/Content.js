import React from 'react';
import {useQuery} from "react-query";
import {fetchRepos, fetchUser} from "./api";

const Content = () => {
  useQuery('fetchUser', () => fetchUser('michaelplazek'));
  const {
    data,
    isLoading,
    isError
  } = useQuery('fetchRepo', () => fetchRepos('michaelplazek'));
  console.log(data);
  return (
    <div>

    </div>
  );
};

export default Content;
