import { createSlice } from "@reduxjs/toolkit"
import { Prods } from "../api/productApi"




const initialState = {
    products: Prods
}


const productSlice = createSlice({

    name: "products",
    initialState,
    reducers: {

        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                product => product.id !== action.payload
            )
        }
    }

})



export const { addProduct, removeProduct } = productSlice.actions
export default productSlice.reducer