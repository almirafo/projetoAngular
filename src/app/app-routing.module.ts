import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'eps' , loadChildren: './pages/eps/eps.module#EpsModule'},
  {path: 'campanha' , loadChildren: './pages/campanha/campanha.module#CampanhaModule'},
  {path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
