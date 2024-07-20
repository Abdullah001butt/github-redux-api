import { configureStore } from "@reduxjs/toolkit";
import gitUser from "../features/gitUserSlice";

const store = configureStore({
  reducer: {
    app: gitUser,
  },
});

export default store;