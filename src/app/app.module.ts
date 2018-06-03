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
import { NewItemComponent } from './pages/new-item/new-item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoryComponent } from './pages/category/category.component';
import { DetailComponent } from './pages/detail/detail.component';

import { CategoriesService } from './services/categories/categories.service';
import { ConditionsService } from './services/conditions/conditions.service';
import { ItemService } from './services/item/item.service';
import { UserService } from './services/user/user.service';
import { ValidationService } from './services/validation/validation.service';
import { StatusService } from './services/status/status.service';




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
    CategoryComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        { path: 'register', component: RegistrationComponent },
        { path: 'new-item', component: NewItemComponent },
        { path: 'item/category/:id', component: CategoryComponent },
        { path: 'items/:id', component: DetailComponent }
      ]
    )
  ],
  providers: [
    CategoriesService,
    ConditionsService,
    ItemService,
    UserService,
    ValidationService,
    StatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
