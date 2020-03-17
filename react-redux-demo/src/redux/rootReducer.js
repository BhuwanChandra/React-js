import { combineReducers } from 'redux'
import cakeReducer from "./cake/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import chocolateReducer from "./chocolate/chocolateReducers";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer
})

export default rootReducer