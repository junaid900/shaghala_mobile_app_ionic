import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Share } from '@capacitor/share';
import { NavController, Platform } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { addFavApi, appSettingApi, baseUrl, getWorkerByAdvType, getWorkerByCompany } from '../services/api_url.hepler';
import { getUserId } from '../services/constrant.helper';
import { getLang } from '../services/local.helper';
import { getUser } from '../services/session.helper';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-comapny-detail',
  templateUrl: './comapny-detail.page.html',
  styleUrls: ['./comapny-detail.page.scss'],
})
export class ComapnyDetailPage implements OnInit {
  company: any = {};
  isLoading: boolean =false;
  list: any = [];
  appUrl = baseUrl;
  user = getUser();
  settings: any = {};
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private util: UtilsService,
    private api: ApiService,
    private router: Router,
    private platform: Platform,
    private callNumber: CallNumber,
  ) {
    this.route.queryParams.subscribe(params => {
      try {
        // console.log(params);
        this.company = JSON.parse(params.comapny);
        console.log(this.company)
        this.getPageData(this.company.user_id);
      } catch (e) {
        console.log(e);
      }
    });
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
  goBack(){
    this.navCtrl.back();
  }

  ngOnInit() {
    this.getSettings();
  }
  async getPageData(company_id) {
    this.isLoading = true;
    // let id = await getUserId();
    let response = await this.api.getRequest(getWorkerByCompany + '/' +company_id+ '?lang=' + getLang() + '&id=' + (await getUserId()));
    this.isLoading = false;
    console.log(response);
    if (response) {
      this.list = response;
    } else {
      this.util.showToast("No worker found");
    }
  }


  async addToFav(item) {
    let id = await getUserId();
    this.util.showProgressDialog();
    let response = await this.api.postRequest({
      worker_id: item.worker_id,
      reference: id
    }, addFavApi, true);
    this.util.hideProgressDialog();
    console.log(response);
    if (response) {
      item.fav = item.fav == 1 ? 0 : 1;
      // this.getPageData();
    }
  }
  goToWorkerDetail(item) {
    let navExtras: NavigationExtras = {
      queryParams: { worker: JSON.stringify(item) }
    }
    this.router.navigate(['worker-detail'],navExtras);
  }
  numberCall(){
    // console.log(this.worker.phone);
    this.callNumber.callNumber(this.company.phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
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

}
