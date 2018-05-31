import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './pages/registration/registration.component';

import { UserService } from './services/user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
