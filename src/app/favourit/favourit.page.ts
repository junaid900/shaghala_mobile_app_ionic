import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { addFavApi, baseUrl, favCompanyApi, favIndApi } from '../services/api_url.hepler';
import { getUserId } from '../services/constrant.helper';
import { getLang } from '../services/local.helper';
import { UtilsService } from '../services/utils.service';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab3Page } from '../tab3/tab3.page';


@Component({
  selector: 'app-favourit',
  templateUrl: './favourit.page.html',
  styleUrls: ['./favourit.page.scss'],
})
export class FavouritPage implements OnInit {
  isLoading: boolean = false;
  list: any = [];
  appUrl: string = baseUrl;
  constructor(private router: Router, private navCtrl: NavController,
    private route:ActivatedRoute,
    private api: ApiService,
    private util: UtilsService,
    private translate: TranslateService,
    private menu: MenuController) { 
      this.route.queryParams.subscribe(params=>{
        console.log(params)
        if(params.type == 'worker'){
          this.getIndWorkerData();
        }else{
          this.getCompanyWorkerData();
        }
      })
  }
  async getCompanyWorkerData(){
    this.isLoading = true;
    let id = await getUserId();
    let response = await this.api.getRequest(favCompanyApi+"/"+id+'?lang='+getLang());
    this.isLoading = false;
    if(response){
      this.list = response;
    }else{
      this.util.showToast("No data found");
    }
  }
  async getIndWorkerData(){
    this.isLoading = true;
    let id = await getUserId();
    let response = await this.api.getRequest(favIndApi+"/"+id+'?lang='+getLang());
    this.isLoading = false;
    if(response){
      this.list = response;
    }else{
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
    if(response){
      // item.fav = item.fav == 1? 0 :1;
      this.getCompanyWorkerData();
    }
  }
  
  

  ngOnInit() {
  }
  goBack() {
  this.navCtrl.back();

  }
  goToWorkerDetail(item){
    let navExtras: NavigationExtras = {
      queryParams: { worker: JSON.stringify(item) }
    }
    this.router.navigate(['worker-detail'],navExtras);
  }
 

}
