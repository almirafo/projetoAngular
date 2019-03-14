import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]

})

export class LoginRountingModule {}
