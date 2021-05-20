export const addBook = newBook => (
    {
      type: 'ADD_BOOK',
      payload: newBook,
    }
);

export const setBooks = books => (
  {
    type: 'SET_BOOKS',
    payload: books,
  }
);