import { configureStore } from "@reduxjs/toolkit";
import { deliveryReducer } from "./delivery";
import { deliveryPersonReducer } from "./delivery-person";

const store = configureStore({
  reducer: {
    delivery: deliveryReducer,
    deliveryPerson: deliveryPersonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
