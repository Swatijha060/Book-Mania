import { USER_URL } from "../constants.ts";
import { apiSlice } from "./apiSlice.ts";


export const userApiSlice= apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userData) => ({
                url: `${USER_URL}/register`,
                method: "POST",
                body: userData,
            }),
        }),
        loginUser: builder.mutation({
            query: (userData) => ({
                url: `${USER_URL}/login`,
                method: "POST",
                body: userData,
            }),
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: `${USER_URL}/logout`,
                method: "POST",
            }),
        }),
        getCurrentUserProfile: builder.query({
            query: () => ({
                url: `${USER_URL}/profile`,
                method: "GET",
            }),
        }),
        updateCurrentUserProfile: builder.mutation({
            query: (userData) => ({
                url: `${USER_URL}/profile`,
                method: "PUT",
                body: userData,
            }),
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: `${USER_URL}`,
                method: "GET",
            }),
            providesTags: ["Users"],
        }),
    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
    useGetCurrentUserProfileQuery,
    useUpdateCurrentUserProfileMutation,
    useGetAllUsersQuery

} = userApiSlice