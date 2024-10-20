import DeliveryType from "@/types/delivery";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  delivery: DeliveryType | undefined;
  deliveries: DeliveryType[];
} = {
  delivery: undefined,
  deliveries: [],
};

const slice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    /**
     * Set deliveries list
     */
    setDeliveries: (state, action) => {
      state.deliveries = action.payload;
      return state;
    },

    /**
     * Set current delivery
     */
    setDelivery: (state, action) => {
      state.delivery = action.payload;
      return state;
    },

    /**
     * Add new delivery
     */
    addDelivery: (state, action) => {
      state.deliveries.unshift(action.payload);
      return state;
    },

    /**
     * Update delivery
     */
    updateDelivery: (state, action) => {
      state.deliveries = state.deliveries.map((delivery) =>
        delivery.id === action.payload.id
          ? { ...delivery, ...action.payload }
          : delivery
      );
      return state;
    },

    /**
     * Remove delivery
     */
    removeDelivery: (state, action) => {
      state.deliveries = state.deliveries.filter(
        (delivery) => delivery.id !== action.payload
      );
      return state;
    },
  },
});

export const {
  setDeliveries,
  setDelivery,
  addDelivery,
  updateDelivery,
  removeDelivery,
} = slice.actions;

export const deliveryReducer = slice.reducer;
