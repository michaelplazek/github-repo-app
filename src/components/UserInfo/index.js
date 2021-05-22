import React from "react";
import { Box, Heading, Text } from "grommet";
import { useQuery } from "react-query";
import { fetchUser } from "../../api";
import { setLocation } from "../../api/utils";

const UserInfo = () => {
  const { data: user, isSuccess } = useQuery("fetchUser", fetchUser, {
    retry: 2,
  });
  return (
    <Box margin={{ bottom: "medium" }}>
      {isSuccess && (
        <Box
          direction="row"
          gap="small"
          align="center"
          onClick={() => setLocation(user.htmlUrl)}
        >
          <Box
            width="xsmall"
            height="xsmall"
            round="large"
            background={`url(${user.avatarUrl})`}
            margin={{ right: "small" }}
          />
          <Box>
            <Heading level={1} margin={{ top: "none", bottom: "small" }}>
              {user.login}
            </Heading>
            {user.bio && <Text>{user.bio}</Text>}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UserInfo;
