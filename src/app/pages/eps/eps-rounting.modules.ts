import { EpsListComponent } from './eps-list/eps-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { EpsFormComponent } from './eps-form/eps-form.component';
import { AuthGuard } from '../../guards/auth.guard';


const routes: Routes = [
  {path: '', component: EpsListComponent, canActivateChild: [AuthGuard]},
  {path: 'new', component: EpsFormComponent, canActivateChild: [AuthGuard]},
  {path: ':id/edit', component: EpsFormComponent, canActivateChild: [AuthGuard]},

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [ RouterModule]

})

export class EpsRountingModule {}
