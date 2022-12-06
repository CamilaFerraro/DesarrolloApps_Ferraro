import {createStore, combineReducers} from "redux";
import CategoryReducer from "./reducers/category.reducer";
import BreadReducer from "./reducers/breads.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    bereads: BreadReducer
});

export default createStore(RootReducer);