import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://cryptopanic.com';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => (`/api/free/v1/posts/?auth_token=${import.meta.env.VITE_AUTH_TOKEN}&public=true&kind=news`)
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;