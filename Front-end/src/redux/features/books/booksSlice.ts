import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Book {
  id: string;
  title: string;
  authors_name: string; // Matches booksModel.js
  genre: string; // Genre ID or name
  image: File | null; // Assuming image is a file object
  Description: string;
  published_on: string;
  publisher: string; // Publisher ID or name
  isbn: string;
  pageCount: number;
  language: string;
  pdf: File | null; // Assuming pdf is a file object
  ratings: number;
  numReviews: number;
}

export interface BooksState {
  books: Book[];
  bookmarkedBooks: Book[];
  searchFilter: string;
  selectedBook: Book | null;
}

const initialState: BooksState = {
  books: [],
  bookmarkedBooks: [],
  searchFilter: "",
  selectedBook: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    bookmarkBook: (state, action: PayloadAction<Book>) => {
      const book = action.payload;
      const exists = state.bookmarkedBooks.some((b) => b.id === book.id);
      if (!exists) {
        state.bookmarkedBooks.push(book);
      } else {
        state.bookmarkedBooks = state.bookmarkedBooks.filter((b) => b.id !== book.id);
      }
    },
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.searchFilter = action.payload;
    },
    setSelectedBook: (state, action: PayloadAction<Book | null>) => {
      state.selectedBook = action.payload;
    },
    clearBooks: (state) => {
      state.books = [];
      state.bookmarkedBooks = [];
      state.searchFilter = "";
      state.selectedBook = null;
    },
  },
});

export const { addBook, bookmarkBook, setSearchFilter, setSelectedBook, clearBooks } =
  booksSlice.actions;
export default booksSlice.reducer;