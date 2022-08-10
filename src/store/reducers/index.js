const initialState = {
    catalog: [],
    cart: [],
    isLoading:false
}


export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATALOG_LOADING":
        return {...state,isLoading:true}
        case "GET_CATALOG":
            return {...state, catalog: action.payload,isLoading: false}
        case "ADD_TO_CART":
            const findProduct = state.cart.find(el => el.id === action.payload.id)
            if (findProduct) {
                return {
                    ...state,
                    cart: state.cart.map(el => el.id === findProduct.id ? {
                        ...findProduct,
                        quantity: findProduct.quantity + 1
                    } : el)
                }
            }
            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}
        case "REMOVE_FROM_CART":
            return {...state, cart: state.cart.filter(el => el.id !== action.payload)}
        case "REMOVE_ONE_PRODUCT" :
            return {...state, cart: state.cart.map(el => el.id === action.payload.id ? {...el, quantity: Math.max(el.quantity - 1, 1)} : el)}
        default:
            return state
    }
}
