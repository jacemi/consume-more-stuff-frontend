import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemService } from '../../services/item/item.service';

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnDestroy {
  data: Object = {
    items: []
  };
  subscription: any;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {
    this.subscription = this.route.params.subscribe((params) => {
      const id = params.id;
      this.itemService.fetchItemsByCategoryId(id)
        .then(() => {
          this.data = this.itemService.filteredData;
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
