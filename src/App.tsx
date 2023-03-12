import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Book from 'components/Book';
import Map from 'components/Map';
import Header from './components/Header';
import LibraryList from './components/LibraryList';

const App: FC = () => {
  return (
    <Box>
      <Header />
      <Flex wrap="wrap" justify="space-between" my={5}>
        <Box width={{ base: '100%', sm: '20%', md: '20%' }}>
          <Book />
        </Box>
        <Box width={{ base: '100%', sm: '25%', md: '25%' }}>
          <LibraryList />
        </Box>
        <Box width={{ base: '100%', sm: '50%', md: '50%' }}>
          <Map />
        </Box>
      </Flex>
    </Box>
  );
};

export default App;
