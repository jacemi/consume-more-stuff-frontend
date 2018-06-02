import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories: Object = this.categoriesService.categories;
 


  constructor(
    private categoriesService: CategoriesService,
    private router: Router ) { }

  ngOnInit() {
  }

  // selectCategory(event) {
  //  this.categoriesService.category = event;
  //  console.log('this.category', event);
  //   this.router.navigateByUrl('/category');
  // }


}
