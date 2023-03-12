import { FC } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

const SearchBar: FC = () => {
  return (
    <InputGroup>
      <InputRightElement pointerEvents="none">
        <SearchIcon color="black" />
      </InputRightElement>
      <Input type="text" placeholder="Search..." bg="white" color="black" />
    </InputGroup>
  );
};

export default SearchBar;
