import UserType from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  deliveryPerson: UserType | undefined;
  deliveryPersons: UserType[];
} = {
  deliveryPerson: undefined,
  deliveryPersons: [],
};

const slice = createSlice({
  name: "deliveryPerson",
  initialState,
  reducers: {
    /**
     * Set delivery persons list
     */
    setDeliveryPersons: (state, action) => {
      state.deliveryPersons = action.payload;
      return state;
    },

    /**
     * Set current deliveryPerson
     */
    setDeliveryPerson: (state, action) => {
      state.deliveryPerson = action.payload;
      return state;
    },

    /**
     * Add new deliveryPerson
     */
    addDeliveryPerson: (state, action) => {
      state.deliveryPersons.unshift(action.payload);
      return state;
    },

    /**
     * Update deliveryPerson
     */
    updateDeliveryPerson: (state, action) => {
      state.deliveryPersons = state.deliveryPersons.map((deliveryPerson) =>
        deliveryPerson.id === action.payload.id
          ? { ...deliveryPerson, ...action.payload }
          : deliveryPerson
      );
      return state;
    },

    /**
     * Remove deliveryPerson
     */
    removeDeliveryPerson: (state, action) => {
      state.deliveryPersons = state.deliveryPersons.filter(
        (deliveryPerson) => deliveryPerson.id !== action.payload
      );
      return state;
    },
  },
});

export const {
  setDeliveryPersons,
  setDeliveryPerson,
  addDeliveryPerson,
  updateDeliveryPerson,
  removeDeliveryPerson,
} = slice.actions;

export const deliveryPersonReducer = slice.reducer;
