import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component'
import { HomeComponent } from './components/home/home.component';
import { StatementComponent } from './components/statement/statement.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent

  },
  {
    path : 'admin',
    component : AdminComponent
  },
  {
    path : 'statement',
    component : StatementComponent
  },
  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path: 'logout', 
    component: LogoutComponent,
    canActivate:[AuthGuardService] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
