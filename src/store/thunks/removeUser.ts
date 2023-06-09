import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (id: string) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_KEY_PATH}/users`,
    {
      id,
    }
  );

  return response.data;
});

export { removeUser };
