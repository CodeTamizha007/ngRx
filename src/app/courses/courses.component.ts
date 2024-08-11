import { Component } from '@angular/core';
import { AppServiceService, Course } from '../app-service.service';
import { noop, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as action from '.././auth.actions'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses$!:Array<Course>;
  constructor(private service:AppServiceService,private store:Store){
   
    this.service.courses$().pipe(
      tap((course)=>{this.store.dispatch(action.course({courses:course}))
      })
    ).subscribe(
      (val)=>{
        this.courses$=val;
      }
    )
    //this.store.pipe(tap((val)=>{this.courses$=val?.Course})).subscribe()//this.courses$=val.Course});
  }

  

}
