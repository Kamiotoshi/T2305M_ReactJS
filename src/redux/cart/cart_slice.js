import { createSlice } from "@reduxjs/toolkit";

const cart_slice = createSlice({
    name: "cart",
    initialState: { items: [] }, // Đảm bảo items luôn là array
    reducers: {
        update_cart: (state, action) => {
            // Đảm bảo payload là array trước khi gán
            if (Array.isArray(action.payload)) {
                state.items = action.payload;
            } else {
                console.error("update_cart payload must be an array");
                state.items = [];
            }
        },
        remove_all: (state) => {
            state.items = [];
        }
    }
});

export const { update_cart, remove_all } = cart_slice.actions;
export default cart_slice.reducer;