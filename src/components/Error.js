import React from "react";
import { Box, Text } from "grommet";
import { Alert as AlertIcon } from "grommet-icons";

const Error = ({ message }) => (
  <Box margin={{ top: "xlarge" }} direction="row" align="center" gap="small">
    <AlertIcon color="status-error" />
    <Text>{message}</Text>
  </Box>
);

export default Error;
