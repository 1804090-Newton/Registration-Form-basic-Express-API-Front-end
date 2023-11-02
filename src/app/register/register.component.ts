import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = "";
  address: string = "";
  phoneNumber: number = 0;
  email: string ="";
  password: string ="";

  constructor(private http: HttpClient) {} // Inject the HttpClient module

  register() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phoneNumber: this.phoneNumber,
      "email" : this.email,
      "password" : this.password
    };

    this.http.post(" http://localhost:8086/user/create ", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Registered Successfully");

      this.name = '';
      this.address = '';
      this.phoneNumber = 0;
      this.email='';
      this.password='';
    });
  }
}
