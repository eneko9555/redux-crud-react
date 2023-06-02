import { configureStore } from '@reduxjs/toolkit'
import  productsReducer  from './components/reducers/productsReducer'
import alertReducer from './components/reducers/alertReducer'

export default configureStore({
    reducer:{
       products : productsReducer,
       alerts: alertReducer
    },
   
    
})
