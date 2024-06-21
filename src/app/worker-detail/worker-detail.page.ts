import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { appSettingApi, baseUrl, checkResetvationApi, workerDetailApi } from '../services/api_url.hepler';
import { getLang } from '../services/local.helper';
import { UtilsService } from '../services/utils.service';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Share } from '@capacitor/share';
import { getUser } from '../services/session.helper';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.page.html',
  styleUrls: ['./worker-detail.page.scss'],
})
export class WorkerDetailPage implements OnInit {
  worker: any = {};
  appUrl: string = baseUrl;
  isLoading: boolean = false;
  settings: any = {};
  user: any = getUser();
  constructor(private navCtrl: NavController, private route: ActivatedRoute,
    private translate: TranslateService,
    private api: ApiService,
    private util: UtilsService,
    private platform: Platform,
    private callNumber: CallNumber,
    private router:Router) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.worker) {
        this.worker = JSON.parse(params.worker);
        console.log(this.worker);
        this.getPageData();
      }
    })
  }
  async getPageData() {
    this.isLoading = true;
    let response = await this.api.getRequest(workerDetailApi + '/' + this.worker.worker_id + "?lang=" + getLang());
    this.isLoading = false;
    if (response) {
      console.log(response);
      this.worker = response;
      if (this.worker.skill_id.length > 0) {
        let skills = JSON.parse(this.worker.skill_id);
        console.log(skills);
        let i = 0;
        this.worker['skills'] = '';
        if (skills instanceof Array) {
          skills.forEach(element => {
            if (i != 0) this.worker.skills += ", "
            this.worker.skills += element[getLang() + "_name"];
            i++;
          });
        }

        console.log(this.worker);
      }
    }
  }

  ngOnInit() {
    this.getSettings();
  }
  goBack() {
    this.navCtrl.back();
  }
  numberCall() {
    console.log(this.worker.phone);
    this.callNumber.callNumber(this.worker.phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  async getSettings() {
    // this.isSettingLoading = true;
    let response = await this.api.getRequest(appSettingApi);
    // this.isSettingLoading = false;
    if (response) {
      this.settings = response;
    }
    console.log(response);
  }
  async shareApp() {
    if (!this.settings.share_text) {
      this.util.showToast("Cannot get url to share try next time");
      this.getSettings();
      return;
    }
    let url = '';
    if (this.platform.is('android')) {
      url = this.settings.android_app_url;
    } else if (this.platform.is('ios')) {
      url = this.settings.ios_app_url;
    }
    console.log(url);
    if (url.length < 1) {
      this.util.showToast("Cannot get url");
      return;
    }

    await Share.share({
      title: 'Share Shkalah App',
      text: this.settings.share_text,
      url: url,
      dialogTitle: 'Share with people',
    });
  }
  async makeReservation() {
    new AlertController().create({
      header:"Warning!",
      message:"You can reserve this cv for "
      +this.settings['reservation_days']+
      " days in "+this.settings['individual_reservation_amount']+
      " QR. do you want to continue?",

      buttons:[{
        text: "No",
        handler: ()=>{}
      },{
        text:"Yes",
        handler:()=>{
          this.checkReservation();
        }
      }]
    }).then(res=>res.present())
  }
  async checkReservation(){
    let payload = {
      user: this.user.user_id,
      worker_id: this.worker.worker_id
    };
    this.util.showProgressDialog('Checking reservation');
    let response = await this.api.postRequest(payload,checkResetvationApi);
    this.util.hideProgressDialog();
    // this.isSettingLoading = false;
    if (response) {
      console.log(response);
      this.reserve();
    }
  }
  async reserve(){
    this.router.navigate(['payment'],{
      queryParams:{
        type:"Reservation",
        message:"Need reservation",
        reservation: JSON.stringify({
          user_id: this.user.user_id,
          worker_id: this.worker.worker_id,
        })
      }
    })
  }


}
