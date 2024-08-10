import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};

  onSubmit() {
    console.log('Form Submitted!', this.model);
    // Here you would typically handle the form submission, e.g., make an HTTP request
  }

}
