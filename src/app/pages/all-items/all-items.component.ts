import { Component } from '@angular/core';

import { ItemService } from '../../services/item/item.service';

@Component({
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent {

  constructor(
    private itemService: ItemService
  ) {
  }
}
