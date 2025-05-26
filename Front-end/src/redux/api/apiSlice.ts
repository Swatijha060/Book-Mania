import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from "../constants.js"

const baseQuery=fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',// Send cookies with the request
})
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Books", "Genre", "Users","Download"],
    endpoints: () => ({
        // Define your endpoints here
    })
})