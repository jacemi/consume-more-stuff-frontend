import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriesService } from '../../services/categories/categories.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories: Object = this.categoriesService.categories;
 loginData: Object = this.userService.user;

  constructor(
    private categoriesService: CategoriesService,
    private userService: UserService,
    private router: Router ) { }

  ngOnInit() {
    console.log(this.loginData['online']);
  }

  // selectCategory(event) {
  //  this.categoriesService.category = event;
  //  console.log('this.category', event);
  //   this.router.navigateByUrl('/category');
  // }


}
