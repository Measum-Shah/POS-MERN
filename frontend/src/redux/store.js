import {createStore,combineReducers, applyMiddleware} from 'redux';
import {thunk} from "redux-thunk"
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from './rootReducer';

const finalReducers = combineReducers({
    rootReducer
})

const initialState ={
    rootReducer :{
        cartItems : localStorage.getItem("cardItems") ? JSON.parse()
 :[]    }
}

const middleware = [thunk];

const store = createStore(finalReducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store