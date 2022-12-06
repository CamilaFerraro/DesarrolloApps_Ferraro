import {BREADS} from "../../data/bread";
import {SELECTED_BREAD, FILTERED_BREAD} from "../actions/bread.action"

const initialState = {
    breads: BREADS,
    filteredBread: [],
    selected: null,
}

const BreadReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_CATEGORY:
          const IndexCategory = state.categories.findIndex(
            (cat) => cat.id === action.categoryID
          );
          if (IndexCategory === -1) return state;
          return { ...state, selected: state.categories[IndexCategory] };
        default:
          return state;
    }
};    

export default BreadReducer;