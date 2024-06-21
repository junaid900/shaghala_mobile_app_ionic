import { createSelector } from "@ngrx/store";
import { AppState } from "../app.store";
import { TestState } from "./test.reducer";


export const selectTest = (state: AppState) => (state.tests);
export const selectAllTest = createSelector(
    selectTest,
    (state: TestState)=>{
        return state.tests;
    }
) 