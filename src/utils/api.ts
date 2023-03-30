import axios from 'axios';

const GOOGLE_BOOK_API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes';

export const searchBook = async (query: string) => {
  try {
    const response = await axios.get(GOOGLE_BOOK_API_ENDPOINT, {
      params: {
        q: query,
        maxResults: 1, // 一度に取得する本の数
      },
    });
    const book = response.data.items[0];
    return {
      id: book.id,
      title: book.volumeInfo.title,
      image: book.volumeInfo.imageLinks?.thumbnail,
      description: book.volumeInfo.description,
      isbn: book.volumeInfo.industryIdentifiers[0].identifier
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
