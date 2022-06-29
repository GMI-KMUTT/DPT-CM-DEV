import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';
import { LoginLayoutComponent } from '../layouts/login-layout/login-layout.component';

// import { LoginComponent } from '../pages/login/login.component';
// import { ProjectComponent } from '../pages/project/project.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginLayoutComponent,
  //   children: [
  //     { path: '', redirectTo: '/login', pathMatch: 'full' },
  //     {
  //       path: 'login',
  //       loadChildren: () =>
  //         import('../pages/login/login.module').then((m) => m.LoginModule),
  //     },
  //   ],
  // },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}