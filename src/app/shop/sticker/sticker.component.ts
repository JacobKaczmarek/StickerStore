import { Component, Input } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';
import { Picture } from '../picture.model';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent {
  @Input() picture: Picture;
  constructor(private wallet: WalletService) { }

  onPurchase() {
    if (this.picture.price > this.wallet.availableMoney) {
      alert("Brak środków");
    } else {
      if (confirm("Czy na pewno chesz kupić ten obrazek?")) {
        this.wallet.decrease(this.picture.price);
        this.picture.purchased = true;
      }
    }
  }

  onDownload() {
    window.open(this.picture.bigPicture);
  }
}
