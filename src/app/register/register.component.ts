import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  // emailPattern = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
  // name: any;
  // email: any;
  registerUserData = {
    name:"",
    email:""
  }
  // registerForm = {
  //   valid :false
  // }
  constructor(private _auth: AuthService,private _router:Router) { }

  ngOnInit(): void {

  }

  OnSubmit(formValue:any){
    this.registerUserData.name = formValue.form.value.Name;
    this.registerUserData.email = formValue.form.value.Email;
    
    console.log(this.registerUserData)
    console.log(formValue)
    this._auth.registerCandidate(this.registerUserData).subscribe(
      res =>{
        localStorage.setItem('token',res.token);
        this._router.navigate(['./quiz'],{ queryParams: { name : this.registerUserData.name, email:this.registerUserData.email } } )
        console.log(res)
      },
      err =>{
        console.log(err);
      }
    )
    
    
  }

}
