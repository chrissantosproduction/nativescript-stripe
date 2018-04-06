import {
    registerElement,
    isKnownView
} from 'nativescript-angular/element-registry';
if (!isKnownView('CreditCardView'))
    registerElement('CreditCardView', () => require('../').CreditCardView);
