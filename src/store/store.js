import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./phoneSlice/PhoneSlice";

export const store = configureStore({
  reducer: {
    phones: phoneReducer,
  },
});
