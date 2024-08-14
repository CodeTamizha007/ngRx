import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Course } from "../app-service.service";
import { createReducer, on } from "@ngrx/store";
import { courseAPi } from "./auth.actions";



export interface  coursestate extends EntityState<Course>{

}

export const adapter = createEntityAdapter<Course>(
    { sortComparer:(a,v)=>{return v.fees-a.fees},
      selectId:c=>c.name
    }
);

export const initailcoursevalue = adapter.getInitialState();

export const coursereducer = createReducer(initailcoursevalue,on(courseAPi,(s,a)=>adapter.setAll(a.courses,initailcoursevalue)))