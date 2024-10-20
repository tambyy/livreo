import { configureStore } from "@reduxjs/toolkit";
import { deliveryReducer } from "./delivery";

const store = configureStore({
  reducer: deliveryReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
