import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  stickers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  constructor() { }

  ngOnInit() {
  }

}
