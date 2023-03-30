import { FC, useContext, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SetBookContext } from '../contexts/BookContext';
import { searchBook } from '../utils/api';

const SearchBar: FC = () => {
  const setBook = useContext(SetBookContext);
  const [bookName, setBookName] = useState('');

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (bookName.trim() === '') return;

      const result: any = await searchBook(bookName);
      setBook(result);
      console.log(result);
      setBookName('');
    }
  };

  return (
    <InputGroup>
      <InputRightElement pointerEvents="none">
        <SearchIcon color="black" />
      </InputRightElement>
      <Input
        type="text"
        placeholder="Search..."
        bg="white"
        color="black"
        value={bookName}
        onChange={(event) => setBookName(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </InputGroup>
  );
};

export default SearchBar;
