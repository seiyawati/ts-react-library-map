import { FC } from 'react';
import { useContext } from 'react';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Box,
} from '@chakra-ui/react';
import { BookContext } from 'contexts/BookContext';

interface Book {
  id: string;
  title: string;
  description: string;
  image: string;
  isbn: string;
}

const Book: FC = () => {
  const book = useContext(BookContext);

  const initialBook: Book = {
    id: 'Wx1dLwEACAAJ',
    title: 'リーダブルコード',
    description: '読んでわかるコードの重要性と方法について解説',
    image:
      'http://books.google.com/books/content?id=Wx1dLwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    isbn: '9784798049991'
  };

  return (
    <Card>
      <Box textAlign="center">
        <Heading size="md">検索した本の情報</Heading>
      </Box>
      <CardBody>
        <Box display="flex" justifyContent="center">
          <Image
            src={book ? book.image : initialBook.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Box>
        <Stack mt="6" spacing="3">
          <Box textAlign="center">
            <Heading size="md">{book ? book.title : initialBook.title}</Heading>
          </Box>
          <Text>{book ? book.description : initialBook.description}</Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default Book;
