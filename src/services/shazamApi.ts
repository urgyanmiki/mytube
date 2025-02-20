import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_RAPID_API_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', import.meta.env.VITE_RAPID_API_KEY);
        }
    }),
    endpoints: (builder) => ({
        getWorldChart: builder.query({
            query: () => 'charts/world?country_code=HU'
        })
    })
});

export const { useGetWorldChartQuery } = shazamApi;