ngOnInit() { store.subscribe(() => {


if (this.user && !this.user.isAdmin) { this.fetchCart(this.user.userID);


public async fetchCart(id : Number) { this.cartService.findCart(id).subscribe((res) => { this.userCart[0] = res[0]; this.cartTime = this.userCart[0].cartTime;

```
this.fetchCartItems(res[0].cartID);
        // console.table('user:' + JSON.stringify(res[0].cartID));
    }, (err) => this.makeCart(id) // ! look in login for correct failure responses... logically- because of order option to delete cart ):
    );
}
public async fetchCartItems(id : Number) {
    console.table('cart:' + id);
    this.cartService.fetchItems(id).subscribe((res) => {
        if (res.length > 0) {
            console.table('cart has items:' + JSON.stringify(res.length));
            this.userCartItems[0] = res[0];
            this.cartPrice = this.userCartItems[0].totalPrice;
        }
    }, (err) => err.message);
}
```



```
// * fetch cartItems from store
    console.table('cartID :', this.userCart);
    // this.cartService.fetchItems().subscribe(
    //    (res) => {
    //      const action = { type: ActionType.getOrders, payload: res };
    //      store.dispatch(action);
    //      this.orders = res;
    //    },
    //    (err) => alert(err.message)
    // );
```
