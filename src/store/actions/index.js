import axios from "axios";

export const getCatalog = () => {
    return (dispatch)=>{
        dispatch({type:"GET_CATALOG_LOADING"})
        axios('https://614dc2cee3cf1f001712d2f5.mockapi.io/api/catalog')
            .then(({data})=>{
                return dispatch({type: "GET_CATALOG", payload: data})
            })
    }
}


export const addToCart = (el) => {
  return   {type:"ADD_TO_CART",payload:el}
}


export const removeOneProduct = (el) => {
return {type:'REMOVE_ONE_PRODUCT',payload:el}
}


export const removeFromCart = (el) => {
return {type:'REMOVE_FROM_CART' , payload: el.id}
}