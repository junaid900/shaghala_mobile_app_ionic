import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { appSettingApi } from '../services/api_url.hepler';
import { getLang } from '../services/local.helper';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  isLoading: boolean = false;
  settings: any = {};
  lang = getLang();
  constructor(
    private navCtrl: NavController,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getPageData();
  }
  goBack() {
    this.navCtrl.back();
  }
  async getPageData() {
    this.isLoading = true;
    let response = await this.api.getRequest(appSettingApi);
    this.isLoading = false;
    if (response) {
      this.settings = response;
    }
    console.log(response);
  }
  async openBrowser(link){
    await Browser.open({url:link});
  }
  isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
    return (url.protocol === "http:" || url.protocol === "https:") && (url.href == string || url.origin == string);
  }
}
