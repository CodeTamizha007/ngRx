import { Component } from '@angular/core';
import { AppServiceService, Course } from '../app-service.service';
import { noop, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as action from '../Authreducers/auth.actions'
import { courses } from '../Authreducers/auth.selectors';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses$
  constructor(private service:AppServiceService,private store:Store){
     
    this.store.dispatch(action.courseaction())
    this.courses$=this.store.pipe(
      select(courses)
    )

    
    //this.store.pipe(tap((val)=>{this.courses$=val?.Course})).subscribe()//this.courses$=val.Course});
  }

  

}
