import { SIGNUP } from "../actions/auth.actions";

const initialState = {
    token: null,
    userID: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return{
                ...state,
                token: action.token,
                userId: action.userId,
            };
        default:
            return state;
    }
    
}

export default AuthReducer;