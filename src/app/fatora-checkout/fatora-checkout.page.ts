import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { map, catchError } from 'rxjs/operators';
import { UtilsService } from '../services/utils.service';


@Component({
  selector: 'app-fatora-checkout',
  templateUrl: './fatora-checkout.page.html',
  styleUrls: ['./fatora-checkout.page.scss'],
})
export class FatoraCheckoutPage implements OnInit {
  card: any;
  stripe: any;
  amount: string = "0";
  paymentBrowser: InAppBrowserObject;
  target = '_blank';
  params: string = '';
  formData: any = {};
  iabOptions: InAppBrowserOptions = {
    location: "no",
    toolbar: "yes",
    hidden: "yes"
  };
  isLoading = false;
  type = '';
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private http: HttpClient,
    private inAppBrowser: InAppBrowser,
    private util: UtilsService
  ) { }

  ngOnInit() {
    console.log(this.navParams.data);
    if (this.navParams.data) {
      let data = this.navParams.data;
      this.type = data.type;
      if (data.type == "Company" && data.sub_type == 'annual') {
        this.amount = data.settings.sub_amount;
      } else  if (data.type == "Company" && data.sub_type == 'sami_annual') {
        this.amount = data.settings.sami_sub_amount;
      } else if (data.type == "Individual" && data.sub_type == 'annual') {
        this.amount = data.settings.individual_amount;
      } else if (data.type == "Individual" && data.sub_type == 'sami_annual') {
        this.amount = data.settings.sami_individual_amount;
      } else if (data.type == "Reservation") {
        this.amount = data.settings.individual_reservation_amount;
      }
    }


  }
  goBack() {
    this.modalCtrl.dismiss();
  }
  getPaymentLink(): Observable<any> {
    let url = "https://api.fatora.io/v1/payments/checkout";

    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'api_key': 'E4B73FEE-F492-4607-A38D-852B0EBC91C9', // Test KEy
      // 'api_key': '5554c9f9-d014-4334-91b6-594404028d23', // Live key
      "api_key": '5554c9f9-d014-4334-91b6-594404028d23'
    };
    let data = {
      "amount": this.amount,
      "currency": "QAR",
      "order_id": this.generateId(),
      "client": {
        "name": this.formData.name,
        "phone": this.formData.phone,
        "email": this.formData.email
      },
      "language": "en",
      "success_url": "http://domain.com/payments/success",
      "failure_url": "http://domain.com/payments/failure",
      "save_token": true,
      "note": "some additional info"
    };
    return this.http.post(url, data, { headers: new HttpHeaders(headersConfig) }).pipe(
      map(response => {
        return response;
      }, catchError((err: any) => {
        console.log(err);
        return Observable.throw(err);
      })));
  }
  generatePayment() {
    if (this.isLoading) {
      this.util.showToast("Please wait");
      return;
    }
    this.util.showProgressDialog("Please wait. Creating payment link");
    this.getPaymentLink().subscribe(data => {
      //success response back with result that contains the payment link 
      //so we will open it on InAppBrowser Plugin now
      this.util.hideProgressDialog();
      if (data.result) {
        console.log(data);
        this.openPaymentBrwserWithURL(data.result.checkout_url);
      }
    }, err => {
      this.util.hideProgressDialog();
      if (err.error) {
        this.util.showToast(err.error.description);
      }
      this.util.showToast("Cannot create payment link");
      console.log(err);
    });
  }
  generateId() {

    // create Date object for current location
    var d = new Date();
    var offset = 1;

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    const d1 = new Date().getTime();
    return d1;
    // console.log(d1);
  }
  openPaymentBrwserWithURL(URL) {
    //here we prepare browser
    // this.isLoading = true;
    console.log(this.generateId());
    this.paymentBrowser = this.inAppBrowser.create(encodeURI(URL), this.target, this.iabOptions);

    //here we listen if load is stop that mean the page is successfully loaded so we will display
    //the broswer for the users
    try {
      this.paymentBrowser.on('loadstop').subscribe((ev) => {
        console.log("loadstop", ev);

        this.paymentBrowser.show();
      });

    } catch (e) {
      console.log('loadstop', e);
    }
    try {
      this.paymentBrowser.on('loaderror').subscribe((error) => {
        console.log("loaderror", error);
        this.paymentBrowser.close();
        this.isLoading = false;
      });
    } catch (e) {
      console.log('loaderror', e);
    }

    //here we listen if loading url make error or something so we can close the browser

    try {
      this.paymentBrowser.on('loadstart').subscribe((event) => {
        var URLString = event["url"];

        console.log("loadstart", URLString);

        //if we found on the link (Pay/SuccessPay) that mean user pay successfully
        //if we found on the link (Pay/CancelCreditCard) that mean user cancel the payment
        if (URLString.includes("payments/success")) {
          this.isLoading = false;
          let data = this.getQueryParams(URLString);
          console.log(data)
          this.params = JSON.stringify(this.getQueryParams(URLString));
          this.util.showToast("Successful payment");
          if (JSON.parse(this.params).transaction_id) {
            if (JSON.parse(this.params).mode != 'test') {
              // {details: details,type:this.type}
              this.modalCtrl.dismiss({ details: JSON.parse(this.params), type: this.type });
              // this.modalCtrl.dismiss(JSON.parse({details: this.params,type:this.type}));
            }
          }

          this.paymentBrowser.close();
        } else if (URLString.includes("payments/failure")) {
          this.isLoading = false;
          let data = this.getQueryParams(URLString);
          console.log(data)
          this.util.showToast("Unsuccessful payment");
          this.paymentBrowser.close();
        }
      });
    } catch (e) {
      console.log('loadstart', e);
    }
    //here we listen to the changes of the borwser current link

  }
  getQueryParams(url) {
    var result = {};
    var params = (url.split('?')[1] || '').split('&');
    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        var paramParts = params[param].split('=');
        result[paramParts[0]] = decodeURIComponent(paramParts[1] || "");
      }
    }
    return result;
  }
}
