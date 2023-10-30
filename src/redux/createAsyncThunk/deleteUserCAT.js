import {createAsyncThunk} from "@reduxjs/toolkit";

const api = "https://jsonplaceholder.typicode.com";

export const deleteUserCAT = createAsyncThunk(
  "users/deleteUser",
  async function (id) {
    await fetch(`${api}/users/${id}`, {method: "delete"});
    return id;
  }
);
