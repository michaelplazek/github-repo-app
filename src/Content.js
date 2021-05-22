import React from 'react';
import {useQuery} from "react-query";
import {fetchUser} from "./api";

const Content = () => {
  const {
    data,
    isLoading,
    isError
  } = useQuery('fetchUser', () => fetchUser('michaelplazek'));
  return (
    <div>

    </div>
  );
};

export default Content;
