import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { addFavApi, baseUrl, getFilterWorkerApi, getUserReservation, getWorkerByAdvType } from '../services/api_url.hepler';
import { getUserId } from '../services/constrant.helper';
import { getLang } from '../services/local.helper';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

 
  isLoading: boolean = true;
  list: any = [];
  appUrl: string = baseUrl;
  isQuery: boolean = false;
  showType: string = 'grid';
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
    this.getPageData();

  }

  async getPageData() {
    this.isLoading = true;
    let id = await getUserId();
    let response = await this.api.getRequest(getUserReservation+ '?lang=' + getLang() + '&user=' + (await getUserId()));
    this.isLoading = false
    console.log(response);
    if (response) {
      this.list = response;
    } else {
      // this.util.showToast("No data found");
    }
  }





  ngOnInit() {
  }
  ionViewDidEnter() {
   
  }

  async getFilter(filter) {
   
  }

  goBack() {
    this.navCtrl.back();
    // this.router.navigate(['menu/first']);
  }
  goToWorkerDetail(item) {
    let navExtras: NavigationExtras = {
      queryParams: { worker: JSON.stringify(item) }
    }
    this.router.navigate(['worker-detail'],navExtras);
  }
  async goToWorkerList(ad_type, type){
  
  }
  changeShowType(){
    if(this.showType == 'grid'){
      this.showType = 'list';
    }else{
      this.showType = 'grid';
    }
  }

}
