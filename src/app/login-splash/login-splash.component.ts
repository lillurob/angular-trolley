import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-splash',
  templateUrl: './login-splash.component.html',
  styleUrls: ['./login-splash.component.css']
})
export class LoginSplashComponent implements OnInit {
  loginForm;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  )
  {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    }); 
  }

  ngOnInit() {
  }

}