const initialstate = {
    loading: false,
    cartItems:[]
}

 export const rootReducer = (state=initialstate,action)=>{
    switch(action.type){
        case 'UPDATECART':
            return{
                ...state,
                cartItems:[...state.cartItems,action.payload]
            }
        default:
            return state;
    }
 };