import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriesService } from '../../services/categories/categories.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    private categoriesService: CategoriesService,
    private userService: UserService,
    private router: Router
  ) {
    this.categories = this.categoriesService.categories;
    this.loginData = this.userService.user;
  }

  categories: Object = {};
  loginData: Object = {};
}
