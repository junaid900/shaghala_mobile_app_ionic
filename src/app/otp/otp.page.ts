import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { ModalController, NavController, NavParams, PopoverController } from '@ionic/angular';
import { NgOtpInputComponent } from 'ng-otp-input';
import { fire } from '../services/firebase.config';
import { UtilsService } from '../services/utils.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  otp: string = '';
  emailOtp: string = '';
  result: any;
  emailCode: string = '';
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController,
    private navParams: NavParams,
    private util: UtilsService,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    console.log(this.navParams.data);
    this.result = this.navParams.data.res;
    if (this.navParams.data.emailCode) {
      if (this.navParams.data.emailCode.length > 0) {
        this.emailCode = this.navParams.data.emailCode;
      }
    }
    // this.modelId = this.navParams.data.paramID;
    // this.modalTitle = this.navParams.data.paramTitle;
  }
  goBack() {
    // this.modalController.dismiss();
    this.popoverCtrl.dismiss();
  }
  onOtpChange(ev) {
    console.log(ev);
    this.otp = ev;
  }
  onEmailOtpChange(ev) {
    this.emailOtp = ev;
  }
  async verify() {
    let data = {
      email: false,
      phone: false,
    }
    if (this.result) {
      // EMAIL VERIFICATION
      if (this.emailCode.length > 0) {
        if (this.emailCode != this.emailOtp) {
          this.util.showToast("Invalid Email Otp");
          return;
        }
        data.email = true;
      }
      //PHONE VERIFICATION
      if (this.otp.length < 6) {
        this.util.showToast("Invalid Otp");
        return;
      }
      const { Device } = Plugins;
      let device = await Device.getInfo();
      if (device.platform == 'ios') {
        let verificationId = this.result;
        let verificationCode = this.otp;
        const credential = fire.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
        console.log("credentials", credential);
        fire.auth().signInWithCredential(credential).then(res => {
          if (res) {
            data.phone = true;
            // this.modalController.dismiss(data);
            this.popoverCtrl.dismiss(data);
          }
        }).catch(e => console.log("credentails error", e));
        // await FirebaseAuthentication.signInWithPhoneNumber({
        //   verificationId,
        //   verificationCode,
        // }).then(res => {
        //   if (res) {
        //     data.phone = true;
        //     this.modalController.dismiss(data);
        //   }
        // });
        // return;
      } else {

        this.util.showProgressDialog();
        this.result.confirm(this.otp).then(res => {
          this.util.hideProgressDialog();
          console.log(res);
          data.phone = true;
          // this.modalController.dismiss(data);
          this.popoverCtrl.dismiss(data);
        }).catch(err => {
          this.util.hideProgressDialog();
          console.log(err);
          this.util.showToast("Invalid Otp")
        });
      }

    } else {
      // ONLY EMAIL VERIFICATION
      if (this.emailCode.length > 0) {
        if (this.emailCode != this.emailOtp) {
          this.util.showToast("Invalid Email Otp");
          return;
        }
        data.email = true;
        // this.modalController.dismiss(data);
        this.popoverCtrl.dismiss(data);
        
      }
    }


  }
}
