import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from ".";
import { adapter, coursestate } from "./auth.entity";
import { Course } from "../app-service.service";

export const  selectAuth = createFeatureSelector<AuthState>(
    "auth"
)

export const login = createSelector(
    selectAuth,
    auth=> !auth.user

)



export const  cose = createFeatureSelector<coursestate>(
    "Courses"
)

export const courses = createSelector(
    cose,
    adapter.getSelectors().selectAll

)