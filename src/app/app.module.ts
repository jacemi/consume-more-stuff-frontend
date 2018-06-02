import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';

import { ItemService } from './services/item/item.service';
import { UserService } from './services/user/user.service';
import { ValidationService } from './services/validation/validation.service';
import { NewItemComponent } from './pages/new-item/new-item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoryComponent } from './pages/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    NewItemComponent,
    SidebarComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'register', component: RegistrationComponent },
        { path: 'new-item', component: NewItemComponent },
        { path: 'category/:id', component: CategoryComponent}
      ]
    )
  ],
  providers: [
    ItemService,
    UserService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
