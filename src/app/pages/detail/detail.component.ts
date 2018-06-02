import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item/item.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private itemService: ItemService,
  ) { }
  item: Object = { itemData: {} };
  author: boolean;
  ngOnInit() {
    const id = this.router.url.split('/')[2];

    return this.itemService.fetchItemById(id)
      .then(() => {
        this.item = this.itemService.itemData;
        console.log(this.item);
        console.log(this.userService.user);
        if (this.item['itemData'].poster_id === this.userService.user['id']) {
          this.author = true;
        } else {
          this.author = false;
        }
      });
  }

}
