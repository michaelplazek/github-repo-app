import React from "react";
import { Box, Spinner } from "grommet";

const Loading = () => {
  return (
    <Box margin={{ top: "xlarge" }}>
      <Spinner size="medium" />
    </Box>
  );
};

export default Loading;
