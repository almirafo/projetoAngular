import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './guards/auth.interceptor';

import { UserService } from './pages/login/shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SharedService } from './services/shared.service';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

// Remover quando utilizar api real
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDatabase} from './in-memory-database';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
  ]
  ,
  providers: [SharedService,
              UserService,
              AuthGuard,
              { provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
