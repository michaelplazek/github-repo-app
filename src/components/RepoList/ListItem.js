import React from 'react';
import {Box, Heading, Text} from "grommet";
import {Star as StarIcon} from "grommet-icons/icons";

const ListItem = ({
                    name,
                    description,
                    id,
                    htmlUrl,
                    language,
                    stars,
                  }) => {
  return (
    <Box
      justify='between'
      direction='row'
      elevation='xsmall'
      margin='small'
      round='small'
      pad='medium'
      key={id}
    >
      <Box basis='3/4'>
        <Box>
          <Heading margin={{ top: 'none', bottom: 'small' }} level={3}>
            {name}
          </Heading>
        </Box>
        <Box margin={{ bottom: 'small' }}>
          <Text>
            {description}
          </Text>
        </Box>
        <Box direction='row' align='center' gap='xsmall'>
          <Box
            className={language}
            round={true}
            width='15px'
            height='15px'
          />
          <Text color='dark-2'>
            {language}
          </Text>
        </Box>
      </Box>
      <Box>
        <Box direction='row' align='center' gap='4px'>
          <StarIcon color='sandybrown'/>
          <Text weight='bold' size='small'>{stars}</Text>
        </Box>
        <Box>

        </Box>
      </Box>

    </Box>
  );
};

export default ListItem;
