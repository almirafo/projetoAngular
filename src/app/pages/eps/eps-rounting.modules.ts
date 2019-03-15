import { AuthGuard } from './../../guards/auth.guard';
import { EpsListComponent } from './eps-list/eps-list.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { EpsFormComponent } from './eps-form/eps-form.component';



const routes: Routes = [
  {path: '', component: EpsListComponent},
  {path: 'new', component: EpsFormComponent},
  {path: ':id/edit', component: EpsFormComponent},

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [ RouterModule]

})

export class EpsRountingModule {}
