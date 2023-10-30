import {createAsyncThunk} from "@reduxjs/toolkit";

const api = "https://jsonplaceholder.typicode.com";

export const editUserCAT = createAsyncThunk(
  "users/editUser",
  async function (id) {
    await fetch(`${api}/users/${id}`, {method: "PATCH"});
    return id;
  }
);
