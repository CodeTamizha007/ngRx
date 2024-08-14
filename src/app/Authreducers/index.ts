import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { Course, LoginDate } from '../app-service.service';
import { courseAPi, login, logout } from './auth.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

export const authFeatureKey = 'auth';

export interface AuthState {
  user:LoginDate | undefined
}

export const coureseinitialdata ={
  courses:{}
}


export const initaildata:AuthState ={
  user : undefined
}

export const authLogin = createReducer(initaildata,
   on(login,(state,action)=>{return{user:action.user}}),
   on(logout,(state,action)=>{return{user:undefined}})
  )

// export const courses = createReducer(coureseinitialdata,
//   on(courseAPi,(state,action)=>{return {courses:action.courses}}))


