import { createAction, props } from "@ngrx/store";
import { Course, LoginDate } from "../app-service.service";



export const login = createAction(
    "[login Component] Login action",
    props<{user:LoginDate}>()
)

export const logout = createAction(
    "[Header Component] logout action"
)

export const course =createAction(
    "[Course Component] Courses",
    props<{courses:Array<Course>}>()
)