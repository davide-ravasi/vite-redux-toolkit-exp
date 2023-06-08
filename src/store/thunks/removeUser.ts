import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const removeUser = createAsyncThunk("users/remove", async (id: string) => {
    const response = await axios.post("http://localhost:3005/users", { id });

    return response.data;
});

export {removeUser};