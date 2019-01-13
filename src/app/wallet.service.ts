import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  public availableMoney;
  constructor() { 
    this.availableMoney = 100;
  }
  
  decrease(ammount) {
    this.availableMoney -= ammount;
  }
}
