import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth/auth-layout.component';
import { LoginPageComponent } from './pages/auth/login/login-page.component';

const routes: Routes = [
  { path: 'auth', component: AuthLayoutComponent,
  children: [
    { path: 'login', component: LoginPageComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
