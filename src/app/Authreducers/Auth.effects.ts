import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";






@Injectable()
export class AuthEffects {
    constructor(private action$:Actions){


        this.action$.subscribe((action:any)=>{
            if(action.type=="[login Component] Login action"){
                localStorage.setItem("user",JSON.stringify(action["user"]))
            }
        })
    }


}