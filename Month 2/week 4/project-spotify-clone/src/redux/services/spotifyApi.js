import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', 'ff3e34aefbmsh2c12436071403f8p170622jsnd370599ed5fb');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getRecommendedTracks: builder.query({query: () => '/recommendations/?limit=50&seed_genres=pop'}),
    })
});

export const {
    useGetRecommendedTracksQuery,
} = spotifyApi;