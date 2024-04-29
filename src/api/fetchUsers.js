import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function (API_URL) {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Request failed, status ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
);
