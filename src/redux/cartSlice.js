import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        totalPrice: 0,
        numOfProducts: 0
    },
    reducers: {
        addProduct: (state, action) => {
            const p = state.cartList.find(p => p.title === action.payload.title);
            if (!p) {
                state.cartList.push({ title: action.payload.title, price: action.payload.price, amount: 1, stock: action.payload.stock, images: action.payload.images });
                state.numOfProducts += 1;
                state.totalPrice += action.payload.price;
            }
            else {
                state.cartList.map(product => {
                    if (product.title === action.payload.title && product.amount + 1 <= product.stock) {
                        product.amount += 1;
                        state.numOfProducts += 1;
                        state.totalPrice += action.payload.price;
                    }
                })
            }
        },
        deleteProduct: (state, action) => {
            state.numOfProducts -= action.payload.amount;
            state.totalPrice -= (action.payload.price) * (action.payload.amount);
            state.cartList = state.cartList.filter(p => p.title !== action.payload.title);
        },
        increaseAmount: (state, action) => {
            state.cartList.map(product => {
                if (product.title === action.payload.title && product.amount + 1 <= product.stock) {
                    product.amount += 1;
                    state.numOfProducts += 1;
                    state.totalPrice += action.payload.price;
                }

            })
        },
        reduceAmount: (state, action) => {
            state.cartList.map(product => {
                if (product.title === action.payload.title && product.amount - 1 > 0) {
                    product.amount -= 1;
                    state.numOfProducts -= 1;
                    state.totalPrice -= action.payload.price;
                }
            })
        },
        addHomeDelivery: (state) => {
            state.totalPrice += 35;
        },
        deleteHomeDelivery: (state) => {
            state.totalPrice -= 35;
        },
        resetTheCart:(state)=>{
            state.cartList=[];
            state.totalPrice=0;
            state.numOfProducts=0;
        }
    }
})

export const { addProduct, deleteProduct, increaseAmount, reduceAmount, addHomeDelivery, deleteHomeDelivery ,resetTheCart} = cartSlice.actions;
export default cartSlice.reducer;