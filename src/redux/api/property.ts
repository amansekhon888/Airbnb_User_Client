import { baseApi } from "../baseApi";

export const propertyApi = baseApi.injectEndpoints({
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