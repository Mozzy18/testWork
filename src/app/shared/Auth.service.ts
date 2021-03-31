
import { Injectable } from '@angular/core';






@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean = false;
   
    
    
    
    constructor(){
        

    }


    logout() {
        this.isLoggedIn=!this.isLoggedIn;
    }
}

