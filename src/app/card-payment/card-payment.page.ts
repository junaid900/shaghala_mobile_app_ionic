import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams, PopoverController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';
declare var Stripe;
@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.page.html',
  styleUrls: ['./card-payment.page.scss'],
})
export class CardPaymentPage implements OnInit {
  card:any;
  stripe: any;
  amount: string = "0";
  // setting;
  constructor(private popoverController: ModalController,
    private navParams: NavParams,
    private alertController: AlertController,
    private util: UtilsService) { }

  ngOnInit() {
    var setting = this.navParams.data;
    this.amount = setting.sub_amount;
    this.setupStripe(setting);
  }
  goBack(){
    this.popoverController.dismiss();
  }
  setupStripe(setting) {
    if(!setting.stripe_publish_key){
      this.util.showToast("Unable to setup stripe try next time");
      return;
    }
    this.stripe = Stripe(setting.stripe_publish_key);

    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });
    console.log(this.card);
    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log(event)
      this.alertController.create({
        message:"Are you sure you want to pay through stripe",
        header:"Warning!",
        buttons:[{
          text:"No",
          handler:()=>{
            // this.submit();
          }
        },{
          text:"Yes",
          handler:()=>{
            this.submit();
          }
        }]
      }).then(res=>res.present())
      
    });
  }
  submit(){
    this.util.showProgressDialog();
    this.stripe.createSource(this.card).then(result => {
      this.util.hideProgressDialog();
      if (result.error) {
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        console.log(result);
        this.popoverController.dismiss(result.source);
        
        // this.makePayment(result.id);
      }
    });
  }
}
