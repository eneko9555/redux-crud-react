import axiosClient from "../../axios/axios"
import { addProduct, addProductFailure, addProductSuccess, getProducts, getProductsFailure, getProductsSuccess, getProductToDelete, deleteProductSuccess,resetProductAction} from "../reducers/productsReducer";
import { addAlertSuccess, addAlertError } from "../reducers/alertReducer";

export const addProductAsync = (product) => async (dispatch) => {
    
    try {
        dispatch(addProduct());
        const { data } = await axiosClient.post("/productos", product);
        dispatch(addProductSuccess(data));
        dispatch(addAlertSuccess("El producto se agregó correctamente"))
    } catch (error) {
        dispatch(addProductFailure(error));
        dispatch(addAlertError())
    }
}

export const getProductsAsync = () => async (dispatch) => {
    
    try {
        dispatch(getProducts());
        const {data} = await axiosClient("/productos");
        dispatch(getProductsSuccess(data));
    } catch (error) {
        console.log(error);
        dispatch(getProductsFailure());
        dispatch(addAlertError())
    }
}

export const editProductAsync = (product) => async (dispatch) => {

    try {
        await axiosClient.put(`/productos/${product.id}`, product);
        dispatch(resetProductAction())
        dispatch(addAlertSuccess("El producto se editó correctamente"))
    } catch (error) {
        console.log(error);
        dispatch(addAlertError())
    }
}

export const deleteProductAsync = (product) => async (dispatch) => {

    try {
        dispatch(getProductToDelete(product.id))
        const {data} = await axiosClient.delete(`/productos/${product.id}`,);
        dispatch(deleteProductSuccess(product));
        dispatch(addAlertSuccess("El producto se eliminó correctamente"))
    } catch (error) {
        console.log(error);
        dispatch(addAlertError())
    }
}