import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartItems: [],
    cartTotalQuantity : 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state,action){
            state.cartItems.push(action.payload);
        },
        removeFromCart(state,action){
            state.cartItems.filter(function(item,index){
                if(item.id === action.payload){
                    return state.cartItems.splice(index, 1)
                }
            })
            
        }
    }
    
})

export const { addToCart , removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;