
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { MyCVComponent } from './my-cv/my-cv.component';




@NgModule({
  declarations: [MyCVComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  
    
  
  ],
  providers:[  ]
})
export class HomeModule { }
