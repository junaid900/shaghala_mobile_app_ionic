import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";


export const addUser = createAction(
    'ADD_USER',
    props<{content: any}>()
)
export const loadUser = createAction(
    'GET_USER'
)
export const removeUser = createAction(
    'REMOVE_USER',
)