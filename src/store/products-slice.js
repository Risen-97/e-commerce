import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], itemDetail: null, totalQuantity: 0 };
export const productsReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const currentProduct = action.payload;
      const containProduct = state.items.find(
        (product) => product.id === currentProduct.id
      );

      state.totalQuantity++;
      if (!containProduct) {
        state.items.push({
          id: currentProduct.id,
          name: currentProduct.name,
          price: currentProduct.price,
          image: currentProduct.image,
          totalPrice: currentProduct.price,
          quantity: 1,
        });
      } else {
        containProduct.quantity++;
        containProduct.totalPrice += currentProduct.price;
      }
    },

    removeItem: (state, action) => {
      const currentProduct = action.payload;

      state.items = state.items.filter(
        (product) => product.id !== currentProduct.id
      );

      state.totalQuantity -= currentProduct.quantity;
    },

    viewProduct: (state, action) => {
      state.itemDetail = action.payload;
    },

    increseQuantity: (state, action) => {
      const currentProduct = state.items.find(
        (product) => product.id === action.payload
      );
      currentProduct.quantity++;
      currentProduct.totalPrice += currentProduct.price;
      state.totalQuantity++;
    },

    decreseQuantity: (state, action) => {
      const currentProduct = state.items.find(
        (product) => product.id === action.payload
      );
      currentProduct.quantity--;
      currentProduct.totalPrice -= currentProduct.price;
      state.totalQuantity--;
    },
  },
});

export const productActions = productsReducer.actions;

export default productsReducer.reducer;

// const currentProduct = action.payload;
//       const containProduct = state.items.find(
//         (product) => product.id === currentProduct.id
//       );
//       if (!containProduct.quantity > 1) {
//         state.items = state.items.filter(
//           (product) => product.id !== currentProduct.id
//         );
//       } else {
//         containProduct.quantity--;
//       }
