import {Component, OnInit} from '@angular/core';
import {ProductModel} from 'src/app/models/Products-model';
import {store} from 'src/app/redux/store';
import {AuthModel} from 'src/app/models/Auth-model';
import {Router} from '@angular/router';

@Component({selector: 'app-admin', templateUrl: './admin.component.html', styles: []})
export class AdminComponent implements OnInit {
    public products : ProductModel[] = [];
    public user = new AuthModel(); // kick out un-logged users + non admins
    private isAdmin : Boolean = false;
    constructor(private router : Router) {}

    ngOnInit() {
        if (!localStorage.token) {
            this.router.navigateByUrl('/');
        }

        store.subscribe(() => {
            this.authenticate();
            this.products = store.getState().products;
            this.user = store.getState().user;

        });
        this.products = store.getState().products;
    }
    private authenticate() {
        setTimeout(() => {
            if (this.user) {

                console.log(this.user.isAdmin);
                if (!this.user.isAdmin) {
                    this.router.navigateByUrl('/');

                }
            }
        }, 10);

    }
}
