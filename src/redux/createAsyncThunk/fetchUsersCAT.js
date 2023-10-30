import {createAsyncThunk} from "@reduxjs/toolkit";

import imgAvatar from "./../../assets/avatar.png";
import imgEllipsis from "./../../assets/ellipsis.png";

const api = "https://jsonplaceholder.typicode.com";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function (limit = 6) {
    const response = await fetch(`${api}/users?_limit=${limit}`);
    const data = await response.json();
    const users = data.map((user) => {
      return {
        id: user.id,
        name: user.name,
        userName: user.username,
        imgAvatar: imgAvatar,
        imgEllipsis: imgEllipsis,
        email: user.email,
        city: user.address.city,
        phone: user.phone,
        companyName: user.company.name,
      };
    });
    return users;
  }
);
