import React from "react";
import { Box, Heading, Text } from "grommet";
import { Star as StarIcon } from "grommet-icons";
import { setLocation } from "../../api";

const ListItem = ({ name, description, htmlUrl, language, stars }) => {
  return (
    <Box
      justify="between"
      width="xlarge"
      direction="row"
      round="small"
      pad="medium"
      background="#333"
      onClick={() => setLocation(htmlUrl)}
      hoverIndicator={true}
    >
      <Box basis="3/4">
        <Box>
          <Heading margin={{ top: "none", bottom: "small" }} level={3}>
            {name}
          </Heading>
        </Box>
        <Box margin={{ bottom: "small" }}>
          <Text>{description}</Text>
        </Box>
        {language && (
          <Box direction="row" align="center" gap="xsmall">
            <Box className={language} round={true} width="15px" height="15px" />
            <Text>{language}</Text>
          </Box>
        )}
      </Box>
      <Box>
        <Box direction="row" align="center" gap="4px">
          <StarIcon color="sandybrown" />
          <Text weight="bold" size="small">
            {stars}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ListItem;
