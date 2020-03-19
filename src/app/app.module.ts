import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginSplashComponent } from './login-splash/login-splash.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginSplashComponent },
      { path: 'test', component: TestComponent },
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    LoginSplashComponent, TestComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
