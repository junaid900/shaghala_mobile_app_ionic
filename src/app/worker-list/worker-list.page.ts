import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';
import { TranslateService } from '@ngx-translate/core';
import { param } from 'jquery';
import { filter } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { addFavApi, baseUrl, favCompanyApi, getFilterWorkerApi, getWorkerByAdvType, workerApi } from '../services/api_url.hepler';
import { getUserId } from '../services/constrant.helper';
import { getLang } from '../services/local.helper';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.page.html',
  styleUrls: ['./worker-list.page.scss'],
})
export class WorkerListPage implements OnInit {


  isLoading: boolean = true;
  list: any = [];
  appUrl: string = baseUrl;
  isQuery: boolean = false;
  showType: string = 'grid';
  selectedType: any = 'indiv';
  showAcType = true;
  title = "Workers";
  constructor(private router: Router, private navCtrl: NavController,
    private route: ActivatedRoute,
    private api: ApiService,
    private util: UtilsService,
    private platform: Platform,
    private translate: TranslateService,) {
    // this.getPageData();
    // this.platform.backButton.subscribeWithPriority(10,()=>{
    //   this.router.navigate(['menu/first']);
    // });
    this.title = 'Workers';
    this.getFilterPayload();
  }
  changeType(type) {
    this.selectedType = type;
    this.getFilterPayload('type');
  }
  async getPageData(ac_type, advs_type) {
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
  getFilterPayload(from = '') {
    
    this.route.queryParams.subscribe(params => {
      console.log(params)
      if (params.type == "advs_type") {
        this.getPageData(params.ac_type, params.advs_type);
      }
      if (params.type == "query") {
        let payload = {
          query: params.query
        };
        this.getFilter(payload);
        return;
      }
      if (params.type == "adv-filter") {
        let payload = JSON.parse(params.payload);
        this.getFilter(payload);
        return;
      }
      if (params.type == 'ac_type') {
        // CHECK TYPE (FROM WHERE THIS PAGE IS COMING); 
        if (params.data_type) {
          let localType = this.selectedType;
          // this.selectedType = 'indiv';
          this.showAcType = true;
          if (params.data_type == 'comp') {
            this.selectedType = 'comp';
            this.showAcType = false;
          }else if(params.data_type == 'both'){
            this.selectedType = 'indiv';
            this.showAcType = true;
          }else if(params.data_type == 'indiv'){
            this.selectedType = 'comp';
            this.showAcType = false;
          }
          if(from == 'type'){
            this.selectedType = localType;
          }
          if(params.title){
            if(params.title.length > 0){
              this.title = params.title;
            }else{
              this.title = "Workers";
            }
          }

        }
        
        let payload = {
          ac_type: params.ac_type
        };
        this.getFilter(payload);
        return;
      }
    })
  }
  ionViewDidEnter() {
    console.log("view enter");

  }

  async getFilter(filter) {
    this.isLoading = true;
    console.log(getFilterWorkerApi
      + '?lang=' + getLang() + '&id=' + (await getUserId()), filter);
    let response = await this.api.postRequest({ type: this.selectedType, ...filter }, getFilterWorkerApi
      + '?lang=' + getLang() + '&id=' + (await getUserId()));
    this.isLoading = false;
    console.log(response);
    if (response) {
      this.list = response;
    } else {
      this.list = [];
      // this.util.showToast("No data found");
    }
  }

  goBack() {
    this.navCtrl.back();
    // this.router.navigate(['menu/first']);
  }
  goToWorkerDetail(item) {
    let navExtras: NavigationExtras = {
      queryParams: { worker: JSON.stringify(item) }
    }
    this.router.navigate(['worker-detail'], navExtras);
  }
  async goToWorkerList(ad_type, type) {

    let navExtras: NavigationExtras = {
      queryParams: {
        type: "advs_type",
        advs_type: ad_type,
        ac_type: type
      }
    };
    this.router.navigate(['worker-list'], navExtras);
  }
  changeShowType() {
    if (this.showType == 'grid') {
      this.showType = 'list';
    } else {
      this.showType = 'grid';
    }
  }
}
