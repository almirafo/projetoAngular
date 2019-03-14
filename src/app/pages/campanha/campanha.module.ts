import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PickListModule} from 'primeng/picklist';
import { CampanhaRoutingModule } from './campanha-routing.module';
import { CampanhaListComponent } from './campanha-list/campanha-list.component';
import { CampanhaFormComponent } from './campanha-form/campanha-form.component';

@NgModule({
  declarations: [CampanhaListComponent, CampanhaFormComponent],
  imports: [
    InputTextModule,
    ButtonModule,
    DataTableModule,
    CommonModule,
    CampanhaRoutingModule,
    PickListModule
  ]
})
export class CampanhaModule { }
