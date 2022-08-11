import { ADD_USER, REMOVE_USER} from "./actionTypes";

const userReducer = (state =[], action) => {
    
    switch (action.type) {

        case ADD_USER:
            const {user} = action
            return [...state, user]
        
        case REMOVE_USER:
                return []

        default:
            return state;
    }

}

export default userReducer;