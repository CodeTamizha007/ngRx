import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private service:AppServiceService){
     this.service.login$().subscribe((value)=>{
    
      
     })
  }
}
