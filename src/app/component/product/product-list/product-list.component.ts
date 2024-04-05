import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    @Input()
    product: {
        id: number,
        name: string,
        brand: string,
        category: string,
        price: number,
        is_in_inventory: boolean,
        items_left: number,
        imageURL:string,
        slug: string
      }

      constructor() {
        this.product = {
          id: 0,
          name: '',
          brand: '',
          category: '',
          price: 0,
          is_in_inventory: false,
          items_left: 0,
          imageURL: '',
          slug: ''
        };
      }
    
  
}
