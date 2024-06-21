import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { addFavApi, baseUrl, favCompanyApi, getCompaniesApi, getFilterWorkerApi, getWorkerByAdvType, workerApi } from '../services/api_url.hepler';
import { getUserId } from '../services/constrant.helper';
import { getLang } from '../services/local.helper';
import { UtilsService } from '../services/utils.service';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.page.html',
  styleUrls: ['./company-list.page.scss'],
})
export class CompanyListPage implements OnInit {

  isLoading: boolean = true;
  list: any = [];
  appUrl: string = baseUrl;
  lang: string = getLang();
  isQuery: boolean = false;
  selectedType: any = {};
  constructor(private router: Router, private navCtrl: NavController,
    private route: ActivatedRoute,
    private api: ApiService,
    private util: UtilsService,
    private platform: Platform,
    private translate: TranslateService,
    private menu: MenuController) {
    // this.getPageData();
    // this.platform.backButton.subscribeWithPriority(10,()=>{
    //   this.router.navigate(['menu/first/tabs/tab2']);
    // });


  }

  async getPageData(acTypeId = '0') {
    // this.isLoading = true;
    // let id = await getUserId();
    let response = await this.api.getRequest(getCompaniesApi + '?ac_type=' + acTypeId +
      '&lang=' + getLang() + '&id=' + (await getUserId()));
    this.isLoading = false;
    console.log(response);
    if (response) {
      this.list = response;
    } else {
      this.util.showToast("No data found");
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



  ngOnInit() {
  }
  ionViewDidEnter() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.type) {
        if (params.type == 'ac_type') {
          if (params.typeData) {
            try {
              this.selectedType = JSON.parse(params.typeData);
            } catch (e) { }
          }
          this.getPageData(params.ac_type);
        }
      }
    })

  }

  async getFilter(filter) {
    this.isLoading = true;
    console.log(getFilterWorkerApi
      + '?lang=' + getLang() + '&id=' + (await getUserId()), filter);
    let response = await this.api.postRequest(filter, getFilterWorkerApi
      + '?lang=' + getLang() + '&id=' + (await getUserId()));
    this.isLoading = false;
    console.log(response);
    if (response) {
      this.list = response;
    } else {
      // this.util.showToast("No data found");
    }
  }

  goBack() {
    this.navCtrl.back();
    // this.router.navigate(['menu']);
  }
  goToWorkerDetail(item) {
    let navExtras: NavigationExtras = {
      queryParams: { comapny: JSON.stringify(item) }
    }
    this.router.navigate(['comapny-detail'], navExtras);
  }
  async goToWorkerList(ad_type, type) {
    // this.navCtrl.pop().then(res=>{
    //   console.log(res);
    // });

    // let navExtras: NavigationOptions = {
    //   queryParams: {
    //     type: "advs_type",
    //     advs_type: ad_type,
    //     ac_type: type
    //   }
    // };
    // this.navCtrl.navigateForward('worker-list',navExtras);
    // let navExtras: NavigationExtras = {
    //   queryParams: {
    //     type: "advs_type",
    //     advs_type: ad_type,
    //     ac_type: type
    //   }
    // };
    // this.router.navigate(['worker-list'],navExtras);
  }
  openMenu() {
    this.menu.open();
  }

}
