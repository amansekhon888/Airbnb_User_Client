import { baseApi } from "../baseApi";

export const propertyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => `/property/my`,
      transformResponse: (response) => response.data,
      providesTags: ["Properties"],
    }),
    getPropertiesById: builder.query({
      query: (id) => `/property/my/${id}`,
      transformResponse: (response) => response.data,
      providesTags: ['Property']
    }),
    addProperty: builder.mutation({
      query: (data) => ({
        url: '/property/add',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ["Properties"],
    }),
    editProperty: builder.mutation({
      query: ({ id, data }) => ({
        url: `/property/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ['Property'],
    }),
    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `/property/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Properties"],
    }),
    getCategories: builder.query({
      query: () => `/categories`,
      transformResponse: (response) => response.data,
    })
  }),
});

export const { useGetPropertiesQuery, useAddPropertyMutation, useGetPropertiesByIdQuery, useDeletePropertyMutation, useGetCategoriesQuery, useEditPropertyMutation } = propertyApi;