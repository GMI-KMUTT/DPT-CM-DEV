import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './share/materials/materials.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RoutingModule } from './routing/routing.module';
import { ProjectComponent } from './pages/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    ProjectComponent,
  ],
  imports: [BrowserModule, HttpClientModule, MaterialModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
