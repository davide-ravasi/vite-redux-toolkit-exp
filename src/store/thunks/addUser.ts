import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from '@faker-js/faker';

const addUser = createAsyncThunk("users/add", async (user: string) => {
    const response = await axios.post("http://localhost:3005/users", { name: faker.name.fullName() });
    // await helper(1000);
    // response.data will be the new user created
    return response.data;
});   

export {addUser};