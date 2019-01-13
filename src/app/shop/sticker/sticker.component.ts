import { Component } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent {
  price = 3;
  constructor(private wallet: WalletService) {}

  onPurchase() {
    if(confirm("Czy na pewno chesz kupić ten obrazek?")){
      this.wallet.decrease(this.price);
      window.open('../../assets/cat.jpg');
    }
  }
}
