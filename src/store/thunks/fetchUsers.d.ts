import { AsyncThunkAction } from "@reduxjs/toolkit";

interface MyData {
  id: number;
  name: string;
}

type FetchUsersThunk = AsyncThunkAction<MyData, void, object>;

declare const fetchUsers: FetchUsersThunk;

export default fetchUsers;
