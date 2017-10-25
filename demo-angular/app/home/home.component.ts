import { Component } from '@angular/core';
import { CreditCardView, Card, Stripe } from 'nativescript-stripe';

@Component({
    selector: 'HomeComponent',
    templateUrl: 'home/home.component.html'
})
export class HomeComponent {
    public submit() {
        console.log('Submitted');
    }
}