import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayout } from './layout/auth/auth-layout.component';
import { LoginPage } from './pages/auth/registration/login-page.component';

const routes: Routes = [
  { path: 'auth', component: AuthLayout,
  children: [
    { path: 'login', component: LoginPage }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
