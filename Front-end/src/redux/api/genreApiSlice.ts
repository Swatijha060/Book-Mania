import { GENRE_URL } from "../constants.ts";
import { apiSlice } from "./apiSlice.ts";

export const genreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGenres: builder.query({
      query: () => ({
        url: `${GENRE_URL}`,
        method: "GET",
        headers:{
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        }
      }),
      providesTags: ["Genre"],
    }),
    getGenreById: builder.query({
      query: (id) => ({
        url: `${GENRE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["Genre"],
    }),
    createGenre: builder.mutation({
      query: (genreData) => ({
        url: `${GENRE_URL}/create`,
        method: "POST",
        body: genreData,
      }),
      invalidatesTags: ["Genre"],
    }),
    updateGenre: builder.mutation({
      query: ({  id,genreData }) => ({
        url: `${GENRE_URL}/update`,
        method: "PUT",
        body:{id,...genreData},
      }),
      invalidatesTags: ["Genre"],
    }),
    deleteGenre: builder.mutation({
      query: (id) => ({
        url: `${GENRE_URL}/delete`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Genre"],
    }),
  }),
});
export const {
  useGetAllGenresQuery,
  useGetGenreByIdQuery,
  useCreateGenreMutation,
  useUpdateGenreMutation,
  useDeleteGenreMutation,
} = genreApiSlice;
