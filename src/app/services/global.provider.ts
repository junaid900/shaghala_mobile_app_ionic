import { Inject, Injectable } from "@angular/core";

@Injectable()
export class GlobalProvider{
    public user: any = {};
    
    constructor(){
        // this.user = data;
    }
    setData(user){
        this.user = user;
    }

}