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
            query: () => 'v1/charts/world?country_code=HU'
        }),
        getArtist: builder.query({
            query: (artistId) => `v2/artists/details?artist_id=${artistId}`
        }),
        getGenre: builder.query({
            query: (genreId) => `v1/charts/genre-world?genre_code=${genreId}&country_code=HU`
        }),
        getSearchSuggest: builder.query({
            query: (searchTerm) => `v1/search/suggest?query=${searchTerm}`
        })
    })
});

export const { useGetWorldChartQuery, useGetArtistQuery, useGetGenreQuery, useGetSearchSuggestQuery } = shazamApi;