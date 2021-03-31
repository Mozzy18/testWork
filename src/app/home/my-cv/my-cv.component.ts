import { AuthService } from './../../shared/Auth.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.scss']
})
export class MyCVComponent implements OnInit  {

  constructor(private as:AuthService) {
    
   }

  ngOnInit(): void {
    
  }
   logOut(){
     this.as.logout()
   }
}
