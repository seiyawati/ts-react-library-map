import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Book from 'components/Book';
import Map from 'components/Map';
import Header from './components/Header';
import LibraryList from './components/LibraryList';
import BookProvider from 'contexts/BookContext';

const App: FC = () => {
  return (
    <BookProvider>
      <Box>
        <Header />
        <Flex wrap="wrap" justify="space-between" my={5}>
          <Box width={{ base: '100%', sm: '45%', md: '45%', lg: '25%' }}>
            <Book />
          </Box>
          <Box width={{ base: '100%', sm: '45%', md: '45%', lg: '25%' }}>
            <LibraryList />
          </Box>
          <Box width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}>
            <Map />
          </Box>
        </Flex>
      </Box>
    </BookProvider>
  );
};

export default App;
