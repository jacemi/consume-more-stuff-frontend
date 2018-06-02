import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './services/categories/categories.service';
import { ConditionsService } from './services/conditions/conditions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private categoriesService: CategoriesService,
    private conditionsService: ConditionsService
  ) { }

  ngOnInit() {
    this.categoriesService.fetchCategories();
    this.conditionsService.fetchConditions();
  }

}
