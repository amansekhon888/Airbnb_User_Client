// import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
// import { FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import Cookies from "js-cookie";

// const baseQuery = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_LIVE_API_URL,
//   credentials: "include",
//   prepareHeaders: (headers) => {
//     const token = Cookies.get("client-token");
//     if (token) {
//     headers.set("x-csrf-token", `${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithInterceptor: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   const result = await baseQuery(args, api, extraOptions);

//   if (result.error && result.error.status === 401) {
//     console.error("Unauthorized access. Clearing login data.");
//   }

//   return result;
// };

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQueryWithInterceptor,
//   endpoints: () => ({}),
// });
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3008/api',
    // credentials: "include",
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YmEyODM1OGE3M2Q4ZmUxNTFjNjA0NyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0MjMwMDcwOSwiZXhwIjoxNzQzMTY0NzA5fQ.ieWlOUwmZ5Sso8ngYAkhYbWIoVQrGpxj1k044mmglnE`)
      return headers
    },
  }),
  tagTypes: ['User', 'verify', 'Properties', "Property"],
  endpoints: (builder) => ({
    uploadSingleImage: builder.mutation({
      query: (formData) => ({
        url: `/upload-single`,
        method: 'POST',
        body: formData,
      }),
    }),
    uploadMultipleImages: builder.mutation({
      query: (formData) => ({
        url: `/upload-multiple`,
        method: 'POST',
        body: formData,
      }),
      transformResponse: (response) => response.data,
    }),
  })
});

export const { useUploadSingleImageMutation, useUploadMultipleImagesMutation } = baseApi;