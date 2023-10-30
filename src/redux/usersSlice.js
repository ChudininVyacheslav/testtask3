import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "./createAsyncThunk/fetchUsersCAT";
import {getUserCAT} from "./createAsyncThunk/getUserCAT";
import {deleteUserCAT} from "./createAsyncThunk/deleteUserCAT";
import {editUserCAT} from "./createAsyncThunk/editUserCAT";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    archivedUsers: [],
    user: [],
    status: null,
    error: null,
  },

  reducers: {
    editUser(state, action) {
      const users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            userName: action.payload.userName,
            email: action.payload.email,
            city: action.payload.city,
            phone: action.payload.phone,
            companyName: action.payload.companyName,
            imgAvatar: action.payload.imgAvatar,
            imgEllipsis: action.payload.imgEllipsis,
          };
        }
        return user;
      });
      state.users = users;
      return state.users;
    },
    archivedUser(state, action) {
      const {users, archivedUsers} = state.users.reduce(
        (result, user) => {
          if (user.id === action.payload) {
            result.archivedUsers.push(user);
          } else {
            result.users.push(user);
          }
          return result;
        },
        {users: [], archivedUsers: [...state.archivedUsers]}
      );
      state.users = users;
      state.archivedUsers = archivedUsers;
    },
    activedUser(state, action) {
      const {users, archivedUsers} = state.archivedUsers.reduce(
        (result, user) => {
          if (user.id === action.payload) {
            result.users.push(user);
          } else {
            result.archivedUsers.push(user);
          }
          return result;
        },
        {users: [...state.users], archivedUsers: []}
      );
      state.users = users;
      state.archivedUsers = archivedUsers;
    },
    deleteUser(state, action) {
      state.users.filter((user) => {
        return user.id !== action.payload;
      });
    },
  },

  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.users = action.payload;
    },
    [getUserCAT.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.user = action.payload;
    },
    [deleteUserCAT.fulfilled]: (state, action) => {
      state.users = state.users.filter((user) => {
        return user.id !== action.payload;
      });
    },
    [editUserCAT.fulfilled]: (state, action) => {
      const users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            userName: action.payload.userName,
            email: action.payload.email,
            city: action.payload.city,
            phone: action.payload.phone,
            companyName: action.payload.companyName,
            imgAvatar: action.payload.imgAvatar,
            imgEllipsis: action.payload.imgEllipsis,
          };
        }
        return user;
      });
      state.users = users;
    },
  },
});

export const {editUser, archivedUser, deleteUser, activedUser} =
  usersSlice.actions;

export default usersSlice.reducer;
