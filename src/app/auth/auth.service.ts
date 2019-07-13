import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './auth.model';
import { Router } from '@angular/router';



const BACKEND_URL = "http://localhost:3000/api/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  signUp(username: string, email: string, password: string) {
      const userData: UserData = {
        username: username,
        email: email,
        password: password
      }
      this.http.post<{message: string}>(BACKEND_URL + 'users/signUp', userData)
      .subscribe((response) => {
        alert(response.message);
        this.route.navigate(['/']);
      });
    }


    login(email: string, password: string) {
      const userData: UserData = {
        email: email,
        password: password
      }
      this.http.post<{message: string}>(BACKEND_URL + 'auth/login', userData)
      .subscribe((response) => {
        alert(response.message);
        this.route.navigate(['/']);
      });
    }


}
