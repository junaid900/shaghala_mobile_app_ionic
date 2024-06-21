import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { loadUser } from "./user.action";


@Injectable()
class UserEffect{
    constructor(
        private store: Store,
        private actions$: Actions
    ){

    }

    // loadUser = (()=>
    //     this.actions$.pipe(
    //         ofType(loadUser),
    //         load
    //     )
    // )
}