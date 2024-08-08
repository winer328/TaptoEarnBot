import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./redux/slice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});
