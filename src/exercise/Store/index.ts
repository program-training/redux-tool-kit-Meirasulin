import { configureStore } from "@reduxjs/toolkit";
import AnimalsReducer from "./mySlice";

const store = configureStore({
  reducer: {
    name: AnimalsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
