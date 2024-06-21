import { createAction, props } from "@ngrx/store";
import { Test } from '../models/test.model';
export const addTest = createAction(
    "[Test Page] Add Test",
    props<{content: any}>(),
);
export const editTest = createAction(
    "[Test Page] Add Test",
    props<{content: any}>(),
);
export const deleteTest = createAction(
    "[Test Page] Delete Test",
    props<{id: string}>()
);
export const loadTest = createAction(
    "[Test Page] Load Test"
);
export const onSuccessTest = createAction(
    "[Test Page] On Test Success",
    props<{tests:Test[]}>(),
)
export const onErrorTest = createAction(
    "[Test Page] On Test Error",
    props<{error: string}>()
)

