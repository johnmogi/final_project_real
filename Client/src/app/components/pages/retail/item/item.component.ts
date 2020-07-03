import {Component, OnInit} from '@angular/core';
import {ProductModel} from 'src/app/models/Products-model';
import {Router, ActivatedRoute} from '@angular/router';
import {store} from 'src/app/redux/store';
import {ShopService} from 'src/app/services/shop.service';
import {CartService} from 'src/app/services/cart.service';
import {CartModel} from 'src/app/models/Cart-model';
import {CartItemModel} from 'src/app/models/Cart-Item-model';

@Component({selector: 'app-item', templateUrl: './item.component.html', styles: []})
export class ItemComponent implements OnInit {
    public userCart = [];
    public cartItems = [];

    public product = new ProductModel();
    public productID?: Number;
    public name : String = '';
    public price : Number = 0;
    public imageUrl : String = '';
    public itemDescription : String = '';
    public catID : String = '';

    public addItem = {
        amount: '',
        productID: '',
        cartId: 0
    };

    public newCart : CartModel = new CartModel();
    public cart : CartModel[] = []; // try to init cart here before add to cart....
    public getCart : CartItemModel[] = [];

    // public product: ProductModel[] =[];

    // public product: ProductModel = new ProductModel();

    constructor(private myActivatedRoute : ActivatedRoute, private shopService : ShopService, private cartService : CartService, private router : Router) {}
    async ngOnInit() {
        const cart = localStorage.getItem(`userCart`)
        const items = localStorage.getItem(`userItems`)
        this.userCart.push(JSON.parse(cart))
        this.cartItems.push(JSON.parse(items))

        try {
            const id = + this.myActivatedRoute.snapshot.params.id;

            // this.product = await this.shopService.getOneProductAsync(id);
            this.product = await this.shopService.getOneProductAsync(id);
            // console.table('ready: ' + JSON.stringify(this.product));
            this.productID = this.product[0].productID;
            this.name = this.product[0].itemName;
            this.price = this.product[0].price;
            this.imageUrl = this.product[0].imageUrl;
            this.itemDescription = this.product[0].itemDescription;
            this.catID = this.product[0].catID;
        } catch (err) {
            alert(err.message);
        }
    }

    public addToCart(id) { // is the usercart loaded?
        this.addItem.cartId = this.userCart[0].cartID

        this.addItem.productID = id;
        console.log(this.addItem);


        this.cartService.addItemToCart(this.addItem, this.addItem.cartId).subscribe((res) => console.log(res));
    }
}
