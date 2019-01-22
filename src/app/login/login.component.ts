import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.user.username == "admin"
    && this.user.password == "password"){
      this.router.navigateByUrl("https://www.google.com.br")
    }
  }

}
