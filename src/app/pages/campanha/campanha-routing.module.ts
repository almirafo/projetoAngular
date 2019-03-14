import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampanhaFormComponent} from './campanha-form/campanha-form.component';
import {CampanhaListComponent} from './campanha-list/campanha-list.component';

const routes: Routes = [

  {path: '', component: CampanhaListComponent},
  {path: 'new', component: CampanhaFormComponent},
  {path: ':id/edit', component: CampanhaFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampanhaRoutingModule { }
