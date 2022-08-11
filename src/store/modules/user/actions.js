import { ADD_USER, REMOVE_USER} from "./actionTypes";

export const add_user = (user) => ({
    type: ADD_USER,
    user
});

export const remove_user = () => ({
    type: REMOVE_USER,
});

