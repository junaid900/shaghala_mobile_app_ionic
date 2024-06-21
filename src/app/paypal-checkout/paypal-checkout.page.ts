import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-paypal-checkout',
  templateUrl: './paypal-checkout.page.html',
  styleUrls: ['./paypal-checkout.page.scss'],
})
export class PaypalCheckoutPage implements OnInit {
  amount: any = "0";
  type: string = '';
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    // private paypal: PayPalCh
  }

  ngOnInit() {
    // var setting = this.navParams.data;
    if (this.navParams.data) {
      console.log(this.navParams)
      let data = this.navParams.data;
      this.type = data.type;
      if (data.type == "Company") {
        this.amount = data.settings.sub_amount.toString();
      } else if (data.type == "Individual") {
        this.amount = data.settings.individual_amount.toString();
      } else if (data.type == "Reservation") {
        this.amount = data.settings.individual_reservation_amount.toString();
      }
      console.log(this.amount);
      this.setupPaypal(data.settings);

    }
    // this.amount = setting.sub_amount;

  }
  setupPaypal(setting) {
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      <any>window['paypal'].Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal'
        },
        createOrder: (data, actions) => {
          // Set up the transaction
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'USD',
                value: this.amount
              }
            }]
          });
        },

        onApprove: (data, actions) => {
          // This function captures the funds from the transaction.
          return actions.order.capture().then((details) => {
            // This function shows a transaction success message to your buyer.
            console.log(details);
            this.modalCtrl.dismiss({details: details,type:this.type});
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }
      }).render('#paypal-button-container');
    }, 500);
  }
  goBack() {
    this.modalCtrl.dismiss();
  }

}
