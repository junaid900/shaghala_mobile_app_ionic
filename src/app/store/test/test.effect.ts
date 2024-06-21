import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "../app.store";
import { loadTest, onSuccessTest, onErrorTest } from "./test.actions";
import { catchError, map, switchMap } from 'rxjs/operators'
import { from, of } from "rxjs";
import { ApiService } from "src/app/services/api.service";
import { getProductsUrl } from "src/app/helpers/url.helper";
import { Test } from '../models/test.model'

@Injectable()
export class TestEffect {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private api: ApiService,
    ) { }
    // loadTests = createEffect(
    //     this.actions$.pipe(
    //         ofType(loadTest),
    //         switchMap(()=>from())
    //     )
    // )
    loadTests$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTest),
            switchMap(() => from(this.api.getRequest(getProductsUrl)).pipe(
                map((data: Test[]) => {
                    console.log(data);
                    return onSuccessTest({ tests: data });
                }),
                catchError((error) => of(onErrorTest(error)))
            ))
        )
    )

}