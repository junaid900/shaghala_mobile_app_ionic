import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { getWorkerPageApi } from '../services/api_url.hepler';

@Component({
  selector: 'app-advance-filter',
  templateUrl: './advance-filter.page.html',
  styleUrls: ['./advance-filter.page.scss'],
})
export class AdvanceFilterPage implements OnInit {
  isLoading: boolean = false;
  pageData: any = {};
  formData: any = {};
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private api: ApiService,
    private translate: TranslateService
  ) { 
    this.getPageData();
  }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
  async getPageData(){
    this.isLoading = true;
    var response = await this.api.getRequest(getWorkerPageApi);
    this.isLoading = false;
    if (response) {
      this.pageData = response;
      console.log(this.pageData);
    }
  }
  ionViewDidEnter() {
  }
  counter(i: number) {
    return new Array(i);
  }
  async apply(){
    console.log(this.formData);
    let navigationExtras: NavigationExtras = { 
      queryParams: { 
        type: "adv-filter",
        payload: JSON.stringify(this.formData) 
      } 
    };
    this.router.navigate(['worker-list'],navigationExtras);
  }

}
