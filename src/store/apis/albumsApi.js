import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const aplbumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3005' 
    }),
});

/*
    HOW TO USE
    1- identify a group of related requests that your apps need to make
    2- make a new file that will create the api
    3- the api needs to store a ton of state related to data, request, status, errors
        Add a 'reducerPath' to the api object
    4- the api neeeds to know how and where to end requests.
        Add a 'baseQuery' to the api object
    5- Add 'endpoint' one for each kind of request you want to make.
        Reqs that read data are called 'queries', 
        write data are called 'mutations'       
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