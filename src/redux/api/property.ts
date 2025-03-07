import { baseApi } from "../baseApi";

export const propertyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => `/property/my`,
      transformResponse: (response) => response.data,
    }),
    getPropertiesById: builder.query({
      query: (id) => `/property/my/${id}`,
      transformResponse: (response) => response.data
    }),
    addProperty: builder.mutation({
      query: (data) => ({
        url: '/property/add',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Property"],
    })
  }),
});

export const { useGetPropertiesQuery, useAddPropertyMutation, useGetPropertiesByIdQuery } = propertyApi;