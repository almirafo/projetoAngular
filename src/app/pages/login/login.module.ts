import { LoginRountingModule } from './login-rounting.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ LoginFormComponent ],
  imports: [ CommonModule,
             LoginRountingModule,
             ReactiveFormsModule]

})
export class LoginModule { }
