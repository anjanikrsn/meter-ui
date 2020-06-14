import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component'
import { HomeComponent } from './components/home/home.component';
import { StatementComponent } from './components/statement/statement.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent

  },
  {
    path : 'admin',
    component : AdminComponent
  },
  {
    path : 'statement',
    component : StatementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
