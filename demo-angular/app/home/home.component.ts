import { Component } from '@angular/core';
import { CreditCardView, Card, Stripe } from 'nativescript-stripe-sdk';
import { Page } from 'ui/page';

@Component({
    selector: 'HomeComponent',
    templateUrl: 'home/home.component.html'
})
export class HomeComponent {
    constructor(private _page: Page) {}

    public submit() {
        let ccView: CreditCardView = this._page.getViewById('cardView');
        let cc: Card = ccView.card;

        let stripe: Stripe = new Stripe('KEY');
        stripe.createToken(cc.card, function(err, token) {
            alert(token.getId());
        });
    }
}
