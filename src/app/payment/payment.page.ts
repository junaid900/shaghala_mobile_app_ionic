import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
import { ApiService } from '../services/api.service';
import { addReservationFatora, addReservationPaypal, appSettingApi, getUserByIdApi, rechargeFitoraApi, rechargePaypaleApi, rechargeStripeApi } from '../services/api_url.hepler';
import { getUser, setUser } from '../services/session.helper';
import { CardPaymentPage } from '../card-payment/card-payment.page';
import { UtilsService } from '../services/utils.service';
import { PaypalCheckoutPage } from '../paypal-checkout/paypal-checkout.page';
import { StoreService } from '../services/store.service';
import { FatoraCheckoutPage } from '../fatora-checkout/fatora-checkout.page';
import { InAppBrowser, InAppBrowserObject } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  key: string = "pk_test_51JGiMjSJDwx14nOS8E1z0uJf4g7fbE3zRJzfJV4QdathgMVmEIOTuB4Ffd1PTtvKeVrvqDxLjpjmpdmWHkzF0w7l00nGDM4sQ0";
  secretKey: string = "sk_test_51JGiMjSJDwx14nOSzChGOF6Bf0UqtjEVZG1whQppIm4eEcYpQV8MGpKRFw5kS9FhVB4Zw8H7TSvWTANoQhd3Bkd600SJ61abO9";
  card: any;

  paymentAmount: string = '3.33';
  currency: string = 'INR';
  currencyIcon: string = '₹';
  isSettingLoading: boolean = false;
  settings: any;
  type: string = "Company";
  paymentBrowser: InAppBrowserObject;
  reservation: any = {};
  subType: string = "annual";
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private stripe: Stripe,
    private api: ApiService,
    private popoverController: ModalController,
    private util: UtilsService,
    private ss: StoreService,
    private iab: InAppBrowser,
    private route: ActivatedRoute
  ) {
    if (getUser().type == "Company") {
      this.type = "Company";
    } else if (getUser().type == "Individual") {
      this.type = "Individual";
    } else {
      this.type = "None";
    }
    this.route.queryParams.subscribe(res => {
      console.log(res);
      if (res.type) {
        if (res.type == "Reservation") {
          this.type = "Reservation";
          this.reservation = JSON.parse(res.reservation);
        }
      }
      if(res.sub_type){
        this.subType = res.sub_type;
      }
    })

  }

  ngOnInit() {
    // this.stripe.setPublishableKey(this.key);
    this.pageData();
  }
  goBack() {
    this.navCtrl.back();
  }
  async pageData() {
    this.isSettingLoading = true;
    let response = await this.api.getRequest(appSettingApi);
    this.isSettingLoading = false;
    if (response) {
      this.settings = response;
    }
    console.log(response);
  }

  async toPayPal() {
    if (!this.settings) {
      this.util.showToast("Cannot get settings try again later");
      return;
    }
    let popover = await this.popoverController.create(
      {
        component: PaypalCheckoutPage,
        swipeToClose: true,
        componentProps: { settings: this.settings, type: this.type }
      }
    );
    popover.onDidDismiss().then(res => {
      console.log(res);
      if (res.data) {
        console.log(res.data);
        if (res.data.type == "Reservation") {
          this.makeReservatopmPayment(res.data.details, 'paypal');
        } else {
          this.makePaypalPayment(res.data.details, res.data.type);
        }
        // let ccard = res.data.card;
        // console.log(res.data.id);
        // this.makePayment(res.data.id);
      }

    }).catch(err => console.log(err));
    popover.present();
  }
  async toStripe() {
    if (!this.settings) {
      this.util.showToast("Cannot get settings try again later");
      return;
    }
    let popover = await this.popoverController.create(
      {
        component: CardPaymentPage,
        swipeToClose: true,
        componentProps: this.settings
      }
    );
    popover.onDidDismiss().then(res => {
      console.log(res);
      if (res.data) {
        let ccard = res.data.card;
        console.log(res.data.id);
        this.makePayment(res.data.id);
      }

    }).catch(err => console.log(err));
    popover.present();
    // let card = {
    //   number: '4242424242424242',
    //   expMonth: 12,
    //   expYear: 2022,
    //   cvc: '220'
    // }
    // this.stripe.createCardToken(res.data.id)
    // .then(token => {
    //   console.log(token.id);
    //   this.makePayment(token);
    // })
    // .catch(error => {
    //   console.error(error);
    //   this.util.showToast(error.message);
    // });

  }


  async makePayment(token) {

    // if (!getUser().user_id) {
    //   this.util.showToast("User not found");
    //   return;
    // }
    // console.log({
    //   token: token,
    //   user: getUser().user_id
    // });
    // this.util.showProgressDialog('Recharging...');
    // var response = await this.api.postRequest({
    //   token: token,
    //   user: getUser().user_id
    // }, rechargeStripeApi);
    // this.util.hideProgressDialog();
    // console.log(response)
    // if (response) {
    //   this.navCtrl.back();
    //   this.getUserData();
    //   new AlertController().create({
    //     header: "Success!",
    //     message: response.req_message,
    //     buttons: [
    //       {
    //         text: "Dismiss"
    //       }
    //     ]
    //   }).then(res => res.present());
    //   console.log(response)
    // }
  }
  async makePaypalPayment(data, type) {

    if (!getUser().user_id) {
      this.util.showToast("User not found");
      return;
    }
    console.log({
      token: data,
      user: getUser().user_id
    });
    let url = rechargePaypaleApi;
    let amount = this.settings.sub_amount;

    if (type == "Individual") {
      url = rechargePaypaleApi + "/" + type;
      let amount = this.settings.individual_amount;
    }


    this.util.showProgressDialog('Recharging...');
    var response = await this.api.postRequest({
      token: data.payer.payer_id,
      tr_id: data.id,
      amount: amount,
      user: getUser().user_id
    }, url);
    this.util.hideProgressDialog();
    console.log(response)
    if (response) {
      // if(type == "Individual"){
      //   this.router.navigate(['add-worker']);
      // }else{
      this.navCtrl.back();
      // }
      this.getUserData();
      new AlertController().create({
        header: "Success!",
        message: response.req_message,
        buttons: [
          {
            text: "Dismiss"
          }
        ]
      }).then(res => res.present());

      console.log(response)
    }
  }
  async makeReservatopmPayment(data, type) {

    if (!getUser().user_id) {
      this.util.showToast("User not found");
      return;
    }
    console.log({
      token: data,
      user: getUser().user_id
    });
    this.util.showProgressDialog('Recharging...');
    var url = '';
    let token = '';
    let tr_id = '';
    if (type == "paypal") {
      tr_id = data.id;
      token = data.payer.payer_id;
      url = addReservationPaypal;
    } else if (type == "fatora") {
      token = data.order_id;
      tr_id = data.transaction_id;
      url = addReservationFatora;
    }


    var response = await this.api.postRequest({
      token: token,
      tr_id: tr_id,
      amount: this.settings.individual_reservation_amount,
      user: getUser().user_id,
      worker_id: this.reservation.worker_id,
    }, url);
    this.util.hideProgressDialog();
    console.log(response)
    if (response) {
      this.getUserData();
      new AlertController().create({
        header: "Success!",
        message: response.req_message,
        backdropDismiss: false,
        buttons: [
          {
            text: "Go To Home",
            handler: () => {
              window.location.href = '/menu/first';
            }
          }
        ]
      }).then(res => res.present());

      console.log(response)
    }
  }
  async getUserData() {
    var response = await this.api.getRequest(getUserByIdApi + "/" + getUser().user_id);
    console.log("payment", response);
    if (response) {
      setUser(response);
      this.ss.changeUser(response);
    }
  }
  async toFatora() {
    // this.openPaymentBrwserWithURL('https://www.google.com');
    let popover = await this.popoverController.create(
      {
        component: FatoraCheckoutPage,
        swipeToClose: true,
        componentProps: { settings: this.settings, type: this.type,sub_type:this.subType }
      }
    );
    popover.onDidDismiss().then(res => {
      console.log("res", res);
      if (res.data) {
        // res.data.
        console.log(res.data);
        if (res.data.type == "Reservation") {
          this.makeReservatopmPayment(res.data.details, 'fatora');
        } else {
          this.makeFatoraPayment(res.data.details, res.data.type);
        }
      }

    }).catch(err => console.log(err));
    popover.present();
  }

  async makeFatoraPayment(data, type) {

    if (!getUser().user_id) {
      this.util.showToast("User not found");
      return;
    }
    console.log({
      token: data,
      user: getUser().user_id
    });
    let url = rechargeFitoraApi;
    let amount = this.settings.sub_amount;
    if (type == "Individual") {
      url = rechargeFitoraApi + "/" + type;
      amount = this.settings.individual_amount;
    }
    let oId = '';
    if (data.order_id) {
      oId = data.order_id;
    }


    this.util.showProgressDialog('Recharging...');
    var response = await this.api.postRequest({
      token: oId,
      tr_id: data.transaction_id,
      amount: amount,
      sub_type: this.subType,
      user: getUser().user_id
    }, url);
    this.util.hideProgressDialog();
    console.log(response)
    if (response) {
      this.navCtrl.back();
      this.getUserData();
      new AlertController().create({
        header: "Success!",
        message: response.req_message,
        buttons: [
          {
            text: "Dismiss"
          }
        ]
      }).then(res => res.present());

      console.log(response)
    }
  }


  openPaymentBrwserWithURL(URL) {
    //here we prepare browser
    // this.paymentBrowser = this.iab.create(encodeURI(URL), '_blank', 'location=yes');

    // //here we listen if load is stop that mean the page is successfully loaded so we will display
    // //the broswer for the users
    // try {
    //   this.paymentBrowser.on('loadstop').subscribe((ev) => {
    //     this.paymentBrowser.show();
    //   });

    // } catch (e) {
    //   console.log('loadstop', e);
    // }
    // try {
    //   this.paymentBrowser.on('loaderror').subscribe((error) => {
    //     this.paymentBrowser.close();
    //   });
    // } catch (e) {
    //   console.log('loaderror', e);
    // }

    // //here we listen if loading url make error or something so we can close the browser

    // try {
    //   this.paymentBrowser.on('loadstart').subscribe((event) => {
    //     var URLString = event["url"];
    //     console.log(URLString);
    //     //if we found on the link (Pay/SuccessPay) that mean user pay successfully
    //     //if we found on the link (Pay/CancelCreditCard) that mean user cancel the payment
    //     if (URLString.includes("Pay/SuccessPay")) {
    //       this.paymentBrowser.close();
    //     } else if (URLString.includes("Pay/CancelCreditCard")) {
    //       this.paymentBrowser.close();
    //     }
    //   });
    // } catch (e) {
    //   console.log('loadstart', e);
    // }
    //here we listen to the changes of the borwser current link

  }

}
