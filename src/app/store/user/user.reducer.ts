import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user.model";
import { addUser, loadUser, removeUser } from "./user.action";

export interface UserState {
    user: User,
}
const initState: UserState = {
    user: null,
};
export const userReducer = createReducer(
    initState,
    on(loadUser, (state) => ({
        ...state
    })),
    on(addUser, (state, { content }) => ({
        ...state, user: content,
    })),
    on(removeUser,(state)=>({
        ...state,user:null,
    }))
)