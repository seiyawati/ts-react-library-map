import { createContext, useState, FC, ReactNode } from 'react';

export type Book = {
  id: string;
  title: string;
  image: string;
  description: string;
  isbn: string;
};

type BookContext = Book | null;

type SetBookContext = (book: Book) => void;

type Props = {
  children: ReactNode;
};

// コンテキストは 値・値を入れる関数 で分けて作る
export const BookContext = createContext<BookContext>(null);
export const SetBookContext = createContext<SetBookContext>(() => {});

const BookProvider: FC<Props> = ({ children }) => {
  const [book, setBook] = useState<Book | null>(null);

  return (
    <BookContext.Provider value={book}>
      <SetBookContext.Provider value={setBook}>
        {children}
      </SetBookContext.Provider>
    </BookContext.Provider>
  );
};

export default BookProvider;
