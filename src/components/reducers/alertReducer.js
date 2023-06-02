import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const alertReducer = createSlice({
    name: "alerts",
    initialState : {
        alert: "",
    },
    reducers: {
        addAlertSuccess(state, action){
            return{
                ...state,
                alert: Swal.fire(
                    
                    action.payload,
 
                )
            }
        },
        addAlertError(state) {
            return {
                ...state,
                alert: Swal.fire({
                    icon:"error",
                    title:"Hubo un error",
                    text:"Intentalo de nuevo"
                })
            }
        },
    }
    
})

export default alertReducer.reducer

export const {addAlertSuccess, addAlertError, showMsg} = alertReducer.actions
