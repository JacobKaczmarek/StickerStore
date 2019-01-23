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
  picturesPerPage;
  picturePanelSize = 258;
  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.getPicturesList().subscribe((data) => {
      this.pictures = data;
    });

    this.picturesPerPage = Math.floor(window.innerWidth/this.picturePanelSize) * 2;

  }
  adjustPage() {
    this.picturesPerPage = Math.floor(window.innerWidth/this.picturePanelSize) * 2;
    console.log(this.picturesPerPage);
  }
}
