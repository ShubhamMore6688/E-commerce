import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-sale',
  templateUrl: './flash-sale.component.html',
  styleUrls: ['./flash-sale.component.scss']
})
export class FlashSaleComponent {
 
  
  name:string = "Apple iPhone 13 Pro";
 
  price: number =  999;
 
 
  imageURL:string =  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1632456610000";
 
 

 
}
