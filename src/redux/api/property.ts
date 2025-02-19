import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://your-api.com" }), // Replace with actual API
  endpoints: (builder) => ({
    fetchDraft: builder.query({
      query: (draftId) => `/properties/draft/${draftId}`,
    }),
    saveDraft: builder.mutation({
      query: ({ draftId, data }) => ({
        url: `/properties/draft/${draftId || ""}`, // If no draftId, creates a new one
        method: draftId ? "PUT" : "POST",
        body: data,
      }),
    }),
    publishDraft: builder.mutation({
      query: (draftId) => ({
        url: `/properties/draft/${draftId}/publish`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useFetchDraftQuery,
  useSaveDraftMutation,
  usePublishDraftMutation,
} = propertyApi;