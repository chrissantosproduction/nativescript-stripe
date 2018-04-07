[![npm](https://img.shields.io/npm/v/nativescript-stripe.svg)](https://www.npmjs.com/package/nativescript-stripe)
[![npm](https://img.shields.io/npm/dt/nativescript-stripe.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-stripe)

# Installation
To install, clone the repo into the parent directory where your app is located. Then run `tns plugin add ../nativescript-stripe-sdk` inside your project root. **nativescript-stripe-sdk** is taken on npm so this must be installed this way. If you run `tns plugin add nativescript-stripe-sdk` you will install the plugin on npm, which is not the same as this one.

**Credit** to Osei Fortune for his original work on this plugin.

# Configure

* [Android](#android)
* [iOS](#ios)

## Android

## iOS

* NOTE: stripe-ios >= 12.0.0 requires iOS >= 9.0. Modify your minimum build target accordingly.
Place the following in your app.js before `app.start`

JavaScript
```js
var app = require('application');
var platform = ('platform');
app.on(app.launchEvent, (args) => {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "yourApiKey";
    }
});
```
Place the following in your app.ts before `app.start`

TypeScript
```ts
import * as app from 'application';
import * as platform from 'platform';
declare const STPPaymentConfiguration;
app.on(app.launchEvent, (args) => {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "yourApiKey";
    }
});
```

### Angular
Place the following in your main.ts

```ts
import * as app from 'application';
import * as platform from "platform";
declare const STPPaymentConfiguration;
app.on(app.launchEvent, (args) => {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "yourApiKey";
    }
});
```

You must aloso register the CreditCardView in Angular. Place the following in your main.ts

```ts
import { isKnownView, registerElement } from 'nativescript-angular/element-registry';
import { CreditCardView } from 'nativescript-stripe-sdk';
if (!isKnownView('CreditCardView'))
    registerElement('CreditCardView', () => require('nativescript-stripe-sdk').CreditCardView);
```


## Usage

IMPORTANT: Make sure you include `xmlns:stripe="nativescript-stripe"` on the Page tag (vanilla nativescript)

### Using from view
```xml
<stripe:CreditCardView id="card"/>
```

#### Add extra details to card

```js
const ccView = page.getViewById("card");
const cc = ccView.card;
cc.name = "Osei Fortune";
```

```ts
import { CreditCardView, Card } from 'nativescript-stripe-sdk';
const ccView:CreditCardView = page.getViewById("card");
const cc:Card = ccView.card;
cc.name = "Osei Fortune";
```
### Using from code
```ts
import { Card } from 'nativescript-stripe-sdk';
const cc = new Card("1111111111111111", 2, 18, "123");
cc.name = "Osei Fortune";
```

### Get Token

```ts
import {Stripe} from 'nativescript-stripe-sdk';
const stripe = new Stripe('yourApiKey');
stripe.createToken(cc.card,(error,token)=>{
  if(!error){
    //Do something with your token;

  }else{
    console.log(error);
  }
});
```

```js
var Stripe =require('nativescript-stripe-sdk').Stripe;
const stripe = new Stripe('yourApiKey');
stripe.createToken(cc.card,(error,token)=>{
  if(!error){
    //Do something with your token;

  }else{
    console.log(error);
  }
});
```
**Warning** At the moment the `token` sent back by createToken doesn't have the same API depending on the platform.

For exemple, iOS will send back an object having `tokenId` or `card` properties while the Android version will have accessors like `getId()` or `getCard()`.


# TODO
* Android Pay
* Apple Pay
