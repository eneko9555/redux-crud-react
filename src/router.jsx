import React from 'react'
import Layout from './components/Layout';
import Products from './components/Products';
import AddProduct from "./components/AddProduct"
import EditProduct from './components/EditProduct';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index:true,
                element: <Products />
            },
            {
                path: "products/new",
                element: <AddProduct />
            },
            {
                path: "products/edit/:id",
                element: <EditProduct />
            },
        ],
    },
]);

export default router