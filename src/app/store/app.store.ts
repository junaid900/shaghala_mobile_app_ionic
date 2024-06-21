import { TestState } from "./test/test.reducer";
import { UserState } from "./user/user.reducer";

export interface AppState {
    tests: TestState,
    user: UserState
}
export interface Reponse{
    status: any;
    message: any;
    response: any;
}