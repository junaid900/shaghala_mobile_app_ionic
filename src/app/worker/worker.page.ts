import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { addFavApi, baseUrl, favCompanyApi, getTypes, getWorkerByAdvType, workerApi } from '../services/api_url.hepler';
import { getUserId } from '../services/constrant.helper';
import { getLang } from '../services/local.helper';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.page.html',
  styleUrls: ['./worker.page.scss'],
})
export class WorkerPage implements OnInit {

  isLoading: boolean = false;
  list: any = [];
  appUrl: string = baseUrl;
  isTypeLoading: boolean = false;
  typeList: any = [];
  pageType: string = '';
  lang: string = getLang();
  constructor(private router: Router, private navCtrl: NavController,
    private route: ActivatedRoute,
    private api: ApiService,
    private util: UtilsService,
    private translate: TranslateService,
    private menu: MenuController) {
    // this.getPageData();
    this.route.data.subscribe(data => {
      console.log("data", data);
      if (data.type) {
        this.pageType = data.type;
      }
    });
    this.route.queryParams.subscribe(params => {
      console.log(params)
      // if(params.type == 'worker'){
      //   this.getIndWorkerData();
      // }else{
      //   this.getCompanyWorkerData();
      // }
    })
  }
  async getTypesData() {
    this.isTypeLoading = true;
    var response = await this.api.getRequest(getTypes);
    console.log("type", response)
    this.isTypeLoading = false;
    if (response) {
      this.typeList = [];
      for (var i = 0; i < response.length; i++) {
        if (this.pageType == 'company') {
          if (response[i].type_category == 'Both' || response[i].type_category == "Company") {
            this.typeList.push(response[i]);
          }
        } else {
          if (response[i].type_category == 'Both' || response[i].type_category == "Individual") {
            this.typeList.push(response[i]);
          }
        }
      }
    }

  }
  async goToType(type) {
    console.log("mType",type);
    // TYPE FROM WHERE DATA IS COMING
    let typeId = type.type_id;
    let _type = 'indiv';
    if (this.pageType == 'company') {
      _type = 'comp';
    }

    if (_type == 'indiv') {
      let title = getLang() == 'ar'?type.type_name_ar : type.type_name;
      let navParams: NavigationExtras = {
        queryParams: {
          type: "ac_type",
          ac_type: typeId,
          data_type: _type,
          title: title,
        }
      }
      this.router.navigate(['worker-list'], navParams);
    }else{
      let navParams: NavigationExtras = {
        queryParams: {
          type: "ac_type",
          ac_type: typeId,
          typeData: JSON.stringify(type),
          data_type: _type,
        }
      }
      this.router.navigate(['company-list'], navParams);
    }
  }
  // async getPageData() {
  //   this.isLoading = true;
  //   let id = await getUserId();
  //   let response = await this.api.getRequest(workerApi + '?lang=' + getLang() + '&id=' + (await getUserId()));
  //   this.isLoading = false;
  //   console.log(response);
  //   if (response) {
  //     this.list = response;
  //   } else {
  //     this.util.showToast("No data found");
  //   }
  // }


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
    this.getTypesData();
    console.log("view enter");
  }
  goBack() {
    this.navCtrl.back();

  }
  goToWorkerDetail(item) {
    let navExtras: NavigationExtras = {
      queryParams: { worker: JSON.stringify(item) }
    }
    this.router.navigate(['worker-detail'], navExtras);
  }
  openMenu() {
    this.menu.open();
  }
  async getAdvsData(advs_type, ac_type) {
    this.isLoading = true;
    let id = await getUserId();
    let response = await this.api.getRequest(getWorkerByAdvType + '/' + advs_type + '/' + ac_type + '?lang=' + getLang() + '&id=' + (await getUserId()));
    this.isLoading = false;
    console.log(response);
    if (response) {
      this.list = response;
    } else {
      this.util.showToast("No data found");
    }
  }
  async goToWorkerList(ad_type, type) {
    this.getAdvsData(ad_type, type);
    // let navExtras: NavigationExtras = {
    //   queryParams: {
    //     type: "advs_type",
    //     advs_type: ad_type,
    //     ac_type: type
    //   }
    // };
    // this.router.navigate(['worker-list'],navExtras);
  }

}
