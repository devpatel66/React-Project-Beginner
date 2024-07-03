import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wishlist: [],
    recipes:[]
}


const RecpSlice = createSlice({
    name: "WishList",
    initialState,
    reducers: {
        addToWishList(state, action) {
            console.log(state.wishlist);
            state.wishlist = [...state.wishlist,action.payload]
        },
        removeFromWishList(state, action) {
            console.log(action.payload)
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload)
        },
        addToRecepies(state,action){
            state.recipes = action.payload;
        }
    }
})


export const { addToWishList, removeFromWishList,addToRecepies } = RecpSlice.actions;
export default RecpSlice.reducer;

