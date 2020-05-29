import {combineReducers} from "redux";

import cartReducer from './cartReducer'
import categoriesReducer from "./categoriesReducer";


export default combineReducers({
        categoriesReducer,
        cartReducer
    }
)
