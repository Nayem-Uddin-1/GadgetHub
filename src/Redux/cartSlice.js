import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    cartItems: [],
};



const cartSlice = createSlice({

    name: "carts",
    initialState,
    reducers: {
        addToCart: (state, action) => {
           
            const existingProduct = state.cartItems.find(
                item => item.id === action.payload.id
            );

            if (existingProduct) {
                
                existingProduct.quantity += 1;
            } else {
                
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                item => item.id !== action.payload
            );
        },

        clearCart: state => {
            state.cartItems = [];
        }
    }


})




export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;