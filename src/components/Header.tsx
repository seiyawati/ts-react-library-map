import { FC } from 'react';
import { Heading, Flex } from '@chakra-ui/react';
import SearchBar from './SearchBar';

const Header: FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.8rem"
      bg="#319795"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          図書館マップ
        </Heading>
      </Flex>
      <Flex align="center" mr={5}>
        <SearchBar />
      </Flex>
    </Flex>
  );
};

export default Header;
