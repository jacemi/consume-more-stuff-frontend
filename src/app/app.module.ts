import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './pages/registration/registration.component';

import { UserService } from './services/user/user.service';
import { ValidationService } from './services/validation/validation.service';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'register', component: RegistrationComponent}
      ]
    )
  ],
  providers: [
    UserService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
