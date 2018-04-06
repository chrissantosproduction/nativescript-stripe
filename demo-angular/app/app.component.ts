import { Component } from '@angular/core';
import {
    registerElement,
    isKnownView
} from 'nativescript-angular/element-registry';
import { CreditCardView } from 'nativescript-stripe-sdk';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor() {
        if (!isKnownView('CreditCardView')) {
            registerElement('CreditCardView', () => {
                return CreditCardView;
            });
        }
    }
}
