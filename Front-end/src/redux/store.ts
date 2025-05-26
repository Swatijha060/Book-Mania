import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { userApiSlice } from "./api/userApiSlice";
import booksReducer from "./features/books/booksSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;