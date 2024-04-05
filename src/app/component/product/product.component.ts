import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    products = [
        {
            "id": 1,
            "name": "Apple iPhone 13 Pro",
            "brand": "Apple",
            "category": "Smartphones",
            "price": 999,
            "is_in_inventory": true,
            "items_left": 5,
            "imageURL": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1632456610000",
            "slug": "apple-iphone-13-pro"
        },
        {
            "id": 2,
            "name": "Samsung Galaxy S21 Ultra",
            "brand": "Samsung",
            "category": "Smartphones",
            "price": 1199,
            "is_in_inventory": true,
            "items_left": 3,
            "imageURL": "https://images.moneycontrol.com/static-mcnews/2021/02/Samsung-Galaxy-S21-Ultra-2-770x433.png?impolicy=website&width=770&height=431",
            "slug": "samsung-galaxy-s21-ultra"
        },
        {
            "id": 3,
            "name": "Sony WH-1000XM4 Wireless Headphones",
            "brand": "Sony",
            "category": "Headphones",
            "price": 349,
            "is_in_inventory": true,
            "items_left": 8,
            "imageURL": "https://m.media-amazon.com/images/I/61RhLuqNHJL._AC_UF1000,1000_QL80_.jpg",
            "slug": "sony-wh-1000xm4-wireless-headphones"
        },
        {
            "id": 4,
            "name": "Dell XPS 13 Laptop",
            "brand": "Dell",
            "category": "Laptops",
            "price": 1199,
            "is_in_inventory": true,
            "items_left": 6,
            "imageURL": "https://i.gadgets360cdn.com/products/large/Dell-XPS-13-DB-795x800-1608184909.jpg",
            "slug": "dell-xps-13-laptop"
        },
        // {
        //     "id": 5,
        //     "name": "Canon EOS R5 Mirrorless Camera",
        //     "brand": "Canon",
        //     "category": "Cameras",
        //     "price": 3899,
        //     "is_in_inventory": true,
        //     "items_left": 2,
        //     "imageURL": "https://electronics.sony.com/imaging/interchangeable-lens-cameras/full-frame/p/ilce7m3-b",
        //     "slug": "canon-eos-r5-mirrorless-camera"
        // },
        // {
        //     "id": 6,
        //     "name": "LG CX 65-inch OLED 4K TV",
        //     "brand": "LG",
        //     "category": "Televisions",
        //     "price": 2499,
        //     "is_in_inventory": true,
        //     "items_left": 4,
        //     "imageURL": "https://www.lg.com/us/tvs/lg-oled65cxpua-oled-4k-tv",
        //     "slug": "lg-cx-65-inch-oled-4k-tv"
        // },
        // {
        //     "id": 7,
        //     "name": "Google Pixelbook Go",
        //     "brand": "Google",
        //     "category": "Laptops",
        //     "price": 649,
        //     "is_in_inventory": true,
        //     "items_left": 7,
        //     "imageURL": "https://store.google.com/us/product/pixelbook_go",
        //     "slug": "google-pixelbook-go"
        // },
        {
            "id": 8,
            "name": "Bose New QuietComfort Earbuds",
            "brand": "Bose",
            "category": "Headphones",
            "price": 299,
            "is_in_inventory": true,
            "items_left": 4,
            "imageURL": "https://m.media-amazon.com/images/I/61OjFJ2p1nL._AC_UF1000,1000_QL80_.jpg",
            "slug": "bose-quietcomfort-35-ii-wireless-headphones"
        },
        // {
        //     "id": 9,
        //     "name": "Microsoft Surface Laptop 4",
        //     "brand": "Microsoft",
        //     "category": "Laptops",
        //     "price": 999,
        //     "is_in_inventory": true,
        //     "items_left": 5,
        //     "imageURL": "https://www.microsoft.com/en-us/d/surface-laptop-4/944sqsf1lfw8?activetab=pivot%3aoverviewtab",
        //     "slug": "microsoft-surface-laptop-4"
        // },
        {
            "id": 10,
            "name": "GoPro HERO9 Black",
            "brand": "GoPro",
            "category": "Cameras",
            "price": 449,
            "is_in_inventory": true,
            "items_left": 3,
            "imageURL": "https://cdn.mos.cms.futurecdn.net/3NwbszmHSVSwi2nfcVgUB6.jpg",
            "slug": "gopro-hero9-black"
        },
        {
            "id": 11,
            "name": "Apple Watch Series 7",
            "brand": "Apple",
            "category": "Wristwatches",
            "price": 399,
            "is_in_inventory": true,
            "items_left": 6,
            "imageURL": "https://rukminim2.flixcart.com/image/850/1000/ku8pbbk0/smartwatch/w/3/e/ios-mkl33hn-a-apple-yes-original-imag7erwrmg9mpzz.jpeg?q=90&crop=false",
            "slug": "apple-watch-series-7"
        },
        {
            "id": 12,
            "name": "Samsung Galaxy Watch 4",
            "brand": "Samsung",
            "category": "Wristwatches",
            "price": 299,
            "is_in_inventory": true,
            "items_left": 4,
            "imageURL": "https://image-us.samsung.com/SamsungUS/configurator/watch4_bands/W4_46mm_02_BLK_Ridge_BLK-MB-720x720.jpg",
            "slug": "samsung-galaxy-watch-4"
        },
        {
            "id": 13,
            "name": "Apple MacBook Pro 13-inch",
            "brand": "Apple",
            "category": "Laptops",
            "price": 1299,
            "is_in_inventory": true,
            "items_left": 10,
            "imageURL": "https://techcrunch.com/wp-content/uploads/2022/06/CMC_1384.jpg",
            "slug": "apple-macbook-pro-13-inch"
        },
    
        ]
}