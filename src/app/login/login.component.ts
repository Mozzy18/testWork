import { Router } from '@angular/router'
import { AuthService } from './../shared/Auth.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup | undefined;
  hide = true;
 constructor(private authServ:AuthService, private rout:Router){}

 ngOnInit(){
   this.loginForm = new FormGroup({
     email: new FormControl('',[Validators.required,Validators.pattern('test@test')]),
     password: new FormControl ('',[Validators.required,Validators.minLength(4), Validators.pattern('test')])
   })
 }

 onLogin(){
  
  if(this.loginForm?.valid){
    this.authServ.isLoggedIn= true;
    this.rout.navigate(['/home'])
  }
  }
 }



