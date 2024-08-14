import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, tap } from "rxjs/operators";
import { courseaction, courseAPi, login } from "./auth.actions";
import { Store } from "@ngrx/store";
import { AppServiceService } from "../app-service.service";






@Injectable()
export class AuthEffects {
    constructor(private action$:Actions,private store:Store,private service:AppServiceService){ }
    coursea$ = createEffect(()=>
        this.action$.pipe(
            ofType(courseaction),
            concatMap(()=>this.service.courses$()),
            map(courses=>courseAPi({courses}))
        )

    )
     login$= createEffect(()=>
    this.action$.pipe(
        ofType(login),
        tap((action:any)=>{
                    localStorage.setItem("user",JSON.stringify(action["user"]))
            
        })
    ),{dispatch:false})
    


}