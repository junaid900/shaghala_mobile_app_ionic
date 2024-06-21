import { createReducer, on } from "@ngrx/store";
import { Test } from "../models/test.model";
import { addTest, loadTest, onErrorTest, onSuccessTest } from "./test.actions";


export interface TestState {
    tests: Test[];
    error: string;
    status: 'pending' | "success" | 'error' | 'loading';
}

export const initState: TestState = {
    tests: [],
    error: null,
    status: 'pending',
}

export const testReducers = createReducer(
    initState,
    on(loadTest, (state) => ({ ...state, status: 'loading' })),
    on(onSuccessTest, (state, { tests }) => ({
        ...state,
        tests: tests,
        error: null,
        status: 'success'
    })),
    on(onErrorTest, (state, { error }) => ({ ...state, error: error }))
)




