import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
  to create a thunk
  1 - create new file for your thunk. Name it after the purpose of your request
  2 - import createAsyncThunk from @reduxjs/toolkit
  3 - create a thunk using createAsyncThunk. Give it a base type that describe the purpose of the thunk
  4 - make the thunk async and use axios to make the request
  5 - export the thunk
  6 - in the slice file, add the thunk to the extraReducers
  7 - in it watch the action types that are dispatched by the thunk
  8 - export the thunk from the store/index.js file
  */


const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");
  return response.data;
});

/*
  createAsyncThunk takes 2 arguments
    1. action type
    2. async function

  createAsyncThunk returns a function which is called as thunk
  thunk takes 2 arguments
    1. dispatch
    2. getState

  thunk returns a promise

  thunk is used to handle async operations

  createAsyncThunk automatically dispatches 3 actions
  these are the action types that are dispatched
    1. users/fetch/pending
    2. users/fetch/fulfilled
    3. users/fetch/rejected

  we can use these action types in reducer to handle the state

*/

/*
 when fetchUsers is created redux automatically create 3 action types
    1. users/fetch/pending === fetchUsers.pending
    2. users/fetch/fulfilled === fetchUsers.fulfilled
    3. users/fetch/rejected === fetchUsers.rejected

    we can use these action types in reducer to handle the state
*/

export {fetchUsers};
