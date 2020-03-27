import { combineReducers } from 'redux'
import cakeReducer from "./cake/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import chocolateReducer from "./chocolate/chocolateReducers";
import userReducer from "./user/userReducers";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer,
    user: userReducer
})

export default rootReducer