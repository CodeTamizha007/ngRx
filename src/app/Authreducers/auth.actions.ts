import { createAction, props } from "@ngrx/store";
import { Course, LoginDate } from "../app-service.service";



export const login = createAction(
    "[login Component] Login action",
    props<{user:LoginDate}>()
)

export const logout = createAction(
    "[Header Component] logout action"
)

export const courseaction =createAction(
    "[Course Component] Courses Action"
)
  
export const courseAPi =createAction(
    "[Course Component] Courses API call",
    props<{courses:Array<Course>}>()
)