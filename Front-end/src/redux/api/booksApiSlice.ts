import { BOOK_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: `${BOOK_URL}`,
      }),
    }),
    getBookById: builder.query({
      query: (id) => ({
        url: `${BOOK_URL}/${id}`,
        method: "GET",
      }),
    }),
    getBooksByGenre: builder.query({
      query: (genre) => ({
        url: `${BOOK_URL}/genre/${genre}`,
        method: "GET",
      }),
    }),
    createBook: builder.mutation({
      query: (formData) => ({
        url: `${BOOK_URL}/create`,
        method: "POST",
        body: formData,
      }),
    }),
    downloadBook: builder.query({
      query: (id) => `${BOOK_URL}/download/${id}`,
    }),
    addBookmark: builder.mutation({
      query: (bookId) => ({
        url: `${BOOK_URL}/bookmarks`,
        method: "POST",
        body: { bookId },
      }),
    }),
    getBookmarks: builder.query({
      query: () => ({
        url: `${BOOK_URL}/bookmarks`,
        method: "GET",
      }),
    }),
    getRecommendations: builder.query({
      query: () => ({
        url: `${BOOK_URL}/recommendations`,
        method: "GET",
      }),
    }),
    updateReadingStatus: builder.mutation({
      query: ({ bookId, currentPage }) => ({
        url: `${BOOK_URL}/reading-status/${bookId}`,
        method: "POST",
        body: { currentPage },
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useGetBooksByGenreQuery,
  useCreateBookMutation,
  useDownloadBookQuery,
  useAddBookmarkMutation,
  useGetBookmarksQuery,
  useGetRecommendationsQuery,
  useUpdateReadingStatusMutation,
} = bookApiSlice;
