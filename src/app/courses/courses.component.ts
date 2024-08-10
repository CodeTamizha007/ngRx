import { Component } from '@angular/core';
import { AppServiceService, Course } from '../app-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses!:Array<Course>;
  constructor(private service:AppServiceService){
    this.service.courses$().subscribe((value)=>{
      this.courses=value
    })
  }

  

}
