import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/fetchUsers";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    api: {
      entities: [],
      status: "idle",
      error: false,
    },
    archive: [],
    userToEdit: {},
  },
  reducers: {
    archiveUser: (state, { payload: archivedUser }) => {
      state.api.entities = state.api.entities.filter(
        (user) => user.id !== archivedUser.id
      );
      state.archive.push(archivedUser);
    },
    activateUser: (state, { payload: activatedUser }) => {
      state.archive = state.archive.filter(
        (user) => user.id !== activatedUser.id
      );
      state.api.entities.push(activatedUser);
    },
    hideUser: (state, { payload: hidedUser }) => {
      state.api.entities = state.api.entities.filter(
        (user) => user.id !== hidedUser.id
      );
    },
    saveEditedUser: (state, { payload: userData }) => {
      state.api.entities.splice(userData.id - 1, 1, userData);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.api.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, { payload: users }) => {
        state.api.entities = users;
        state.api.status = "success";
        state.api.error = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.api.status = "failed";
        state.api.error = true;
      });
  },
});
export const { archiveUser, activateUser, hideUser, saveEditedUser } =
  usersSlice.actions;
export default usersSlice.reducer;
