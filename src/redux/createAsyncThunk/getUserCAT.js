import {createAsyncThunk} from "@reduxjs/toolkit";

import imgAvatar from "./../../assets/avatar.png";
import imgEllipsis from "./../../assets/ellipsis.png";

const api = "https://jsonplaceholder.typicode.com";

export const getUserCAT = createAsyncThunk(
  "users/getUser",
  async function (id) {
    const response = await fetch(`${api}/users/${id}`);
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      userName: data.username,
      imgAvatar: imgAvatar,
      imgEllipsis: imgEllipsis,
      email: data.email,
      city: data.address.city,
      phone: data.phone,
      companyName: data.company.name,
    };
  }
);
