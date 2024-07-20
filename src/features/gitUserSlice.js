import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk(
  "gitUsers",
  async (args, { rejectWithValue }) => {
    const response = await fetch("https://api.github.com/users");
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue("Opps found an Error");
    }
  }
);

export const gitUser = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllData.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default gitUser.reducer;
