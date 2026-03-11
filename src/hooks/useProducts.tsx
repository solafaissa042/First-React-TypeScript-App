import { useContext } from "react";
import ProductsContext from "../context/ProductProvider";
import {type useProductsContextType } from "../context/ProductProvider";

const useProducts=():useProductsContextType=>{
    return useContext(ProductsContext)
}

export default useProducts