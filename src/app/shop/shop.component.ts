import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { defineBase } from '@angular/core/src/render3';
import { Picture } from './picture.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  pictures: Picture[];
  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.getPicturesList().subscribe((data) => {
      this.pictures = data;
    });
  }

}
