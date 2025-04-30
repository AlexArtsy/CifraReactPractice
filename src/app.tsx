import React from 'react';
import Tabs from './components/tabs/tabs';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { MantineProvider } from '@mantine/core';
import { lists, content } from '@/components/tabs/config';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <MantineProvider>
        <Tabs variant={'line'} lists={lists} content={content} />
      </MantineProvider>
    </ChakraProvider>
  );
};

export default App;
