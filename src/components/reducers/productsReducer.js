// each reducer has his own state
import { createSlice } from "@reduxjs/toolkit";;

const productsReducer = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: false,
        productToAction: null
    },
    reducers: {
        addProduct(state) {
          return {
            ...state,
            loading: true,
            error: null,
          };
        },
        addProductSuccess(state, action) {
          return {
            ...state,
            products: [...state.products, action.payload],
            loading: false,
          };
        },
        addProductFailure(state, action) {
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        },
        getProducts(state) {
          return {
            ...state,
            loading: true,
            error: null,
          };
        },
        getProductsSuccess(state, action) {
          return {
            ...state,
            products: action.payload,
            loading: false,
          };
          
        },
        getProductsFailure(state, action) {
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        },

        //Delete product

        getProductToDelete(state, action){
            return {
                ...state,
                productToAction: action.payload
            }
        },

        deleteProductSuccess(state){          
            return{
                ...state,
                products : state.products.filter(p => p.id !== state.productToAction)  
            }
        },

        //Edit product
        getProductToEdit(state, action){
            return {
                ...state,
                productToAction: action.payload
            }
        },
        resetProductAction(state){
            return{
                ...state,
                productToAction:null
            }
        }      
      }    
})


export const { addProduct, addProductSuccess, addProductFailure, getProducts, getProductsFailure, getProductsSuccess,getProductToDelete, deleteProductSuccess,getProductToEdit, editProductSuccess, resetProductAction} = productsReducer.actions

export default productsReducer.reducer