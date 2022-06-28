import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmOTPComponent } from '../pages/confirm-otp/confirm-otp.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { LoginComponent } from '../pages/login/login.component';
import { ProjectComponent } from '../pages/project/project.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'confirmOTP', component: ConfirmOTPComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}