import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    }
  }
});

export const fetchProductData = () => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/places`);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    dispatch(setDataProduct(data));
  } catch (error) {
    // Handle the error
    console.error('Error:', error);
    // Dispatch an action to handle the error state if needed
    // For example, dispatch(setError(error.message));
  }
};

export const { setDataProduct } = productSlice.actions;

export default productSlice.reducer;
