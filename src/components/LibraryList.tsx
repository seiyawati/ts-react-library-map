import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Library from 'components/Library';

const LibraryList: FC = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  return (
    <Box maxH="100vh" overflowY="scroll">
      <Box textAlign="center">
        <Heading as="h2" size="md" mb="2">
          蔵書がある図書館
        </Heading>
      </Box>
      {items.map((item, index) => (
        <Box key={index} p="4" bg="gray.100" mb="2">
          <Library />
        </Box>
      ))}
    </Box>
  );
};

export default LibraryList;
