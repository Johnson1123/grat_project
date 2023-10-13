import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { baseurl } from "../baseurl";

const baseQuery = fetchBaseQuery({
  baseUrl: baseurl,
  prepareHeaders: (headers, { getState, endpoint }) => {
    let { auth } = getState();
    let token = auth?.userData?.data?.token;
    if (token) {
      headers.set("Authorization", `${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
