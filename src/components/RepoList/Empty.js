import React from "react";
import { Box, Text } from "grommet";

const Empty = ({ message }) => {
  return (
    <Box margin="large">
      <Text>{message}</Text>
    </Box>
  );
};

export default Empty;
