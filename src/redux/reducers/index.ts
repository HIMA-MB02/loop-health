import { combineReducers } from "redux";
import productsReducer from './ProductsReducer';

const rootReducer = combineReducers({
    productsReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
