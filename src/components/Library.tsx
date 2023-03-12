import { FC } from 'react';
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';

const Library: FC = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      boxSize="100%"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '100px' }}
        maxH={{ base: '100%', sm: '100px' }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading size="md">図書館名</Heading>
          <Text py="2">図書館の住所</Text>
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="teal">
            ルート検索
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Library;
