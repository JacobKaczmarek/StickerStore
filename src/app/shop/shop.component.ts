import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Picture } from './picture.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  pictures: Picture[];
  filteredPictures: Picture[];
  picturesPerPage;
  picturePanelSize = 258;
  searchPhrase = '';
  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.getPicturesList().subscribe((data) => {
      this.pictures = data;
      this.filteredPictures = this.pictures;
    });

    this.picturesPerPage = Math.floor(window.innerWidth/this.picturePanelSize) * 2;
  }

  adjustPage() {
    this.picturesPerPage = Math.floor(window.innerWidth/this.picturePanelSize) * 2;
  }

  searchPhraseChanged() {
    this.filteredPictures = [];
    for(let picture of this.pictures) {
      if(picture.name.toUpperCase().includes(this.searchPhrase.toUpperCase())) {
        this.filteredPictures.push(picture);
      }
    }
  }
}
