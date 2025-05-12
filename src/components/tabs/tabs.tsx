import React from 'react';
import { Box, Tabs } from '@chakra-ui/react';
import { Content, TabList, Variant } from './types';

interface IProps {
  variant: Variant;
  lists: Array<TabList>;
  content: Array<Content>;
}

const MyTabs: React.FC<IProps> = (props) => {
  const { variant, lists, content } = props;

  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Tabs.Root defaultValue={lists[0].value} variant={variant}>
        <Tabs.List>
          {lists.map(({ value, list }) => (
            <Tabs.Trigger key={value} value={value}>
              {list}
              <Tabs.Indicator />
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {content.map(({ value, content }) => (
          <Tabs.Content key={value} value={value}>
            {content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
};

export default MyTabs;
