import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { addFavApi, baseUrl, getTypes, homeCompanyWorkerApi, homeIndiWorkerApi, homeSliderApi } from '../services/api_url.hepler';
import { getLang } from '../services/local.helper';
import { UtilsService } from '../services/utils.service';
import { Device } from '@capacitor/device';
import { TranslateService } from '@ngx-translate/core';
import { getUser } from '../services/session.helper';
import { getUserId } from '../services/constrant.helper';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: { delay: 2000 }
  };
  slideOpts1 = {
    initialSlide: 0,
    slidesPerView: 2.8,
    speed: 400
  };
  selectedType: any = 'indiv';
  appUrl: string = baseUrl;
  isSliderLoading: boolean = false;
  isIndLoading: boolean = false;
  isCompLoading: boolean = false;
  inCompanyLoading: boolean = false;
  homeSlides: any = [];
  indList: any = [];
  compList: any = [];
  filterQuery: string = '';
  selectedAdvType: string = '';
  showType: string = 'grid';
  isTypeLoading:boolean = false;
  typeList:any = [];
  lang: string = getLang();

  constructor(private router: Router, private navCtrl: NavController,
    private api: ApiService, private util: UtilsService,
    private menu: MenuController,
    private translate: TranslateService) {
    translate.use(getLang());
    this.getTypesData();

  }
  async getPageData() {
    //  https://shkalah.mjcoders.com/api/profile/profile_slider

    this.isSliderLoading = true;
    let response = await this.api.getRequest(homeSliderApi);
    this.isSliderLoading = false;
    if (response) {
      console.log(response);
      this.homeSlides = response;
    }
  }
  changeAdvType(data) {
    this.selectedAdvType = data;
    this.changeType(this.selectedType);
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
  async getTypesData(){
    this.isTypeLoading = true;
    var response = await this.api.getRequest(getTypes);
    console.log(response)
    this.isTypeLoading = false;
    if(response){
      this.typeList = response;
    }

  }

  async getIndividualData() {
    this.isIndLoading = true;

    let response = await this.api.postRequest({ lang: getLang(), id: (await getUserId()), type: this.selectedAdvType }, homeIndiWorkerApi);
    this.isIndLoading = false;
    if (response) {
      console.log(response);
      this.indList = response;
    }
  }
  async getCompData() {
    this.isCompLoading = true;
    // , type: this.selectedAdvType 
    let response = await this.api.postRequest({ lang: getLang(), id: (await getUserId())}, homeCompanyWorkerApi);
    this.isCompLoading = false;
    if (response) {
      this.compList = response;
    }
  }

  ngOnInit() {
    this.getPageData();
    this.getIndividualData();
  }
  goBack() {
    this.navCtrl.back();
  }
  ionViewDidEnter() {
    console.log("home enter");
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      autoplay: { delay: 2000 }
    };
  }
  changeType(type) {
    if (type == 'comp') {
      this.getCompData();
    } else {
      this.getIndividualData();
    }
    this.selectedType = type;
  }
  goToWorkerDetail(item) {
    let navExtras: NavigationExtras = {
      queryParams: {
        worker: JSON.stringify(item)
      }
    }
    this.router.navigate(['worker-detail'], navExtras);

  }
  async addToFav(item) {
    let id;
    if (getUser().type == 'local')
      id = (await Device.getId()).uuid;
    else
      id = getUser().user_id
    this.util.showProgressDialog();
    let response = await this.api.postRequest({
      worker_id: item.worker_id,
      reference: id
    }, addFavApi, true);
    this.util.hideProgressDialog();
    console.log(response);
    if (response) {
      item.fav = item.fav == 1 ? 0 : 1;
    }
  }
  goToSetting() {
    this.router.navigate(['setting']);
  }
  filter() {
    console.log(this.filterQuery);
    if (this.filterQuery.length < 1) {
      this.util.showToast("Cannot load data");
    }
    let navParams: NavigationExtras = {
      queryParams: {
        type: "query",
        query: this.filterQuery,
      }
    }
    this.router.navigate(['worker-list'], navParams);
  }
  async goToType(type){
    console.log("mType",type);
    // TYPE FROM WHERE DATA IS COMING
    let typeId = type.type_id;
    let _type = 'indiv';
    if(type.type_category == 'Both'){
      _type = 'both';
    }else if(type.type_category == 'Company'){
      _type = 'comp';
    }
    
    let title = getLang() == 'ar'? type.type_name_ar : type.type_name;
    console.log(type);
    let navParams: NavigationExtras = {
      queryParams: {
        type: "ac_type",
        ac_type: typeId,
        title: title,
        data_type: _type,
      }
    }
    this.router.navigate(['worker-list'], navParams);
  }
  openMenu() {
    this.menu.open();
  }
  async openBrowser(link) {
    if (link)
      await Browser.open({ url: link });
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
  changeShowType(){
    if(this.showType == 'grid'){
      this.showType = 'list';
    }else{
      this.showType = 'grid';
    }
  }
}
