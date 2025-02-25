import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_LIVE_API_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = Cookies.get("client-token");
    if (token) {
    headers.set("x-csrf-token", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.error("Unauthorized access. Clearing login data.");
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
