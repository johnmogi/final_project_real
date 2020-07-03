import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import {CartService} from 'src/app/services/cart.service';
import {store} from 'src/app/redux/store';
import {AuthModel} from 'src/app/models/Auth-model';

@Component({selector: 'app-cart', templateUrl: './cart.component.html', styles: []})
export class CartComponent implements OnInit {
    public userCart = [];
    public cartItems = [];
    public cartBox = '';
    public totalPrice = 0;
    public buffer = 0;

    // public user = new AuthModel();


    constructor(private userService : AuthService, private cartService : CartService, private router : Router) {}
    ngDoCheck() {
      this.buffer ++
        if (this.buffer < 1) {
            if (localStorage.getItem('userItems')) {
                this.storageCart();
                console.log("tick")
            }
        }

    }

    ngOnInit() { // do i need to load user and blok non user?
        if (localStorage.getItem('userItems')) {
            this.storageCart();

        }
        if (this.userCart.length < 1) {
            this.userCart = [];
            this.cartBox = 'Start filling up your cart by adding items...';
        }

        if (this.userCart.length > 0) {
            this.cartBox = 'you left an un-saved cart... here are your previous items';
            this.sumTotalPrice(this.userCart);
        }
        // console.table("cart:", this.userCart)
        // console.table("items:", this.cartItems)

    }

    public removeItem(id) {
      this.buffer--
        this.cartService.removeItemFromCart(id, this.userCart[0].cartID).subscribe((res) => console.log(res));
    }

    public sumTotalPrice(cart) {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].totalPrice;
        }
        this.totalPrice = sum;
    }
    public async fetchCart(id : Number) {
        this.cartService.findCart(id).subscribe((res) => {
            this.userCart[0] = res[0];
            // this.cartTime = this.userCart[0].cartTime;
        })
    }
    public storageCart() {
        const cart = localStorage.getItem(`userCart`)
        this.userCart.push(JSON.parse(cart))
        const items = localStorage.getItem(`userItems`)
        const cartLsItems = JSON.parse(items)
        for (let i = 0; i < cartLsItems.length; i++) {
            this.cartItems.push(cartLsItems[i])
        }
    }
}
