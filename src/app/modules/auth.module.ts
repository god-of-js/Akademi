import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../layout/auth/auth-layout.component';

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    RouterModule // Add RouterModule here
  ]
})
export class AuthModule { }
