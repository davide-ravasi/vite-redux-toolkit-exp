import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import usersReducer from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer, // [albumsApi.reducerPath] is like write 'albums'
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  }
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch;
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export { useFetchUsersQuery } from "./apis/albumsApi";
