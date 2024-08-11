import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from ".";

export const  selectAuth = createFeatureSelector<AuthState>(
    "auth"
)

export const login = createSelector(
    selectAuth,
    auth=> !auth.user

)