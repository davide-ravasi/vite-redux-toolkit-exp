import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const albumsApi = createApi({
    reducerPath: 'albums', // the key albums is the name of the slice
    baseQuery: fetchBaseQuery({ // fetchBaseQuery is a wrapper around the fetch api
        baseUrl: 'http://localhost:3005' 
    }),
    endpoints: (builder) => {  // the key endpoints is an object that contains all the requests
        return {
            fetchAlbums: builder.query({ // the key fetchAlbums generate a hook called useFetchAlbumsQuery
                query: (user) => {
                    return {
                        url: `/albums`,
                        method: 'GET',
                        params: { // query params ex: /albums?userId=1
                            userId: user.id,
                        },
                    }
                },
            }), 
        }
    },
});

export const { useFetchAlbumsQuery } = albumsApi; // export the hook
export { albumsApi }; // export the api object

/*
    HOW TO USE
    1- identify a group of related requests that your apps need to make
    2- make a new file that will create the api
    3- the api needs to store a ton of state related to data, request, status, errors
        Add a 'reducerPath' to the api object
    4- the api neeeds to know how and where to end requests.
        Add a 'baseQuery' to the api object
    5- Add 'endpoints' one for each kind of request you want to make.
        Reqs that read data are called 'queries', 
        write data are called 'mutations'
    6- export all of the automatically generated hooks   
    7- connect the API to the store. Reducer, middleware and listeners     
    8- export the hooks from the store/index.js file
*/

/*
    BaseQuery
    uses the fetch api to make requests
    it's a function that takes an object with a url and a method
    and returns a promise that resolves to the response
    it's the default way to make requests

    Uses fetchBaseQuery to make requests
    fetchBaseQuery is a wrapper around the fetch api
    it make a pre-configured version of fetch

*/