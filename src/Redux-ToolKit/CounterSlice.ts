import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./Shoes";

export const counterSlice = createSlice({
  name: "Basket",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          added: true,
          quantity: item.quantity + 1,
        };
      });
    },
    remove: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        } else if (item.quantity <= 1) {
          return {
            ...item,
            quantity: 0,
            added: false,
          };
        }
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      });
    },
    clear: (state,action) => {
        return state.map((item) => {
            if(item.id !== action.payload.id)
            return item;

        return{
            ...item,
            quantity:0,
            added:false
        }
        })
    },
    increment: (state,action) =>{
        return state.map((item)=>{
            if(item.id !== action.payload.id)
            return item
        
        return{
            ...item,
            quantity:item.quantity+1
        }
        
        })
    },
    decrement: (state,action) =>{
      return state.map((item)=>{
          if(item.id !== action.payload.id)
          return item
      
      return{
          ...item,
          quantity:item.quantity-1
      } 
      })
  }
  },
});

export const { add, remove, clear, increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
