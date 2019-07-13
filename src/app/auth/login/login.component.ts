import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
    if (!form.valid) {
      return;
    }
    // console.log(form.value);
    this.authService.login(form.value.email, form.value.password);
  }

}
