import { Component } from '@angular/core';
import { CreditCardView, Card, Stripe } from 'nativescript-stripe';
import { Page } from 'ui/page';

@Component({
    selector: 'HomeComponent',
    templateUrl: 'home/home.component.html'
})
export class HomeComponent {
    constructor(
        private _page: Page,
    ) {
    }

    public submit() {
        let ccView: CreditCardView = this._page.getViewById('cardView');
        let cc: Card = ccView.card;
        //alert(JSON.stringify(cc));

        let stripe: Stripe = new Stripe('pk_test_OHSX2noWHfjZMZ6uj0dbeSN7')
        stripe.createToken(cc.card, function(err, token) {
            alert(`${err} \n ${token} \n ${cc.number} ${cc.expMonth} ${cc.expYear} ${cc.cvc}`);
        })
    }
}