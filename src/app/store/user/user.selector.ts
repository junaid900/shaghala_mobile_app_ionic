import { createSelector } from "@ngrx/store";
import { AppState } from "../app.store";
import { UserState } from "./user.reducer";

export const StatedUser = (state: AppState) => (state.user);

export const selectUser = createSelector(
    StatedUser,
    (state: UserState) => {
        return state.user;
    }
)