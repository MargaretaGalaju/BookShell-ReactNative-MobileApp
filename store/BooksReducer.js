import { combineReducers } from 'redux';
 
const INITIAL_STATE = {
  current: [],
  all_books: [],
};
 
const booksReducer = (state = INITIAL_STATE, action) => {
    const { current,  all_books } = state;

    switch (action.type) {
      case 'ADD_BOOK':
      
        const newBook = action.payload;
        const newState = { current, all_books };
        all_books.push(newBook);

        return newState;
        
      case 'SET_BOOKS':
        const books = action.payload;
        const newStateBooks = { current, all_books: books };

        return newStateBooks;

        default:
        return state
    }
};

export default combineReducers({
  subjects: booksReducer
});