import { ReactiveFormsModule } from '@angular/forms';

import { EpsRountingModule } from './eps-rounting.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpsListComponent } from './eps-list/eps-list.component';
import { EpsFormComponent } from './eps-form/eps-form.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import {PaginatorModule} from 'primeng/components/paginator/paginator';


@NgModule({
  declarations: [EpsListComponent, EpsFormComponent],
  imports: [

    InputTextModule,
    ButtonModule,
    DataTableModule,
    PaginatorModule,
    CommonModule,
    EpsRountingModule,
    ReactiveFormsModule
  ]
})
export class EpsModule { }
