import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ActionSheetController, AlertController, NavController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { addFavApi, baseUrl, deleteWorkerApi, getWorkerByUserApi, workerApi } from '../services/api_url.hepler';
import { getUserId } from '../services/constrant.helper';
import { getLang } from '../services/local.helper';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.page.html',
  styleUrls: ['./my-ads.page.scss'],
})
export class MyAdsPage implements OnInit {

  isLoading: boolean = false;
  list: any = [];
  appUrl: string = baseUrl;
  constructor(private router: Router, private navCtrl: NavController,
    private route: ActivatedRoute,
    private api: ApiService,
    private util: UtilsService,
    private translate: TranslateService,
    private platform: Platform,
    private alertCtrl: AlertController) {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.platform.backButton.subscribeWithPriority(10,()=>{
        this.navCtrl.back();
      });
      this.getPageData();
    })
  }
  async getPageData() {
    this.isLoading = true;
    let id = await getUserId();
    let response = await this.api.getRequest(getWorkerByUserApi + '/'+id+'?lang=' + getLang() + '&id=' + (await getUserId()));
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
    this.getPageData();
  }
  goBack() {
    this.navCtrl.back();
  }
  goToWorkerDetail(item) {
    let navExtras: NavigationExtras = {
      queryParams: { worker: JSON.stringify(item) }
    }
    new ActionSheetController().create({
      buttons:[{
        handler: () => {
          this.router.navigate(['worker-detail'],navExtras);
        },
        text:"View",
        role: 'view'
      },{
        handler: () =>{
          // this.util.showToast("Comming soon");
          this.goToEditWorker(item);
        },
        text:"Edit",
      },{
        handler:()=>{
          this.deleteWorker(item);
          // this.util.showToast("Comming soon");
        },
        text:"Delete",
      },{
        handler: () => {
          // this.util.showToast("Comming soon");
        },
        text:"Cancel",
        role:"cancel"
      }],
      
    }).then(res=>{
      res.present();
    })
  }
  async deleteWorker(item){
   this.alertCtrl.create({
      header:"Warning!",
      message:"Are you sure?",
      buttons:[{
        text:"OK",
        role: "OK",
        handler:()=>{
          this.delete(item);
        } 
      },{
        text:"Cancel",
        role: "cancel",
        handler:()=>{

        }
      }]
    }).then(res=>{
      res.present();
    })
  }
  async delete(worker){
    // let id = await getUserId();
    this.util.showProgressDialog("Deleting worker");
    let response = await this.api.postRequest({
      worker_id: worker.worker_id,
    }, deleteWorkerApi+"/"+worker.worker_id, true);
    this.util.hideProgressDialog();
    if(response){
      this.getPageData();
    }
  }
  async goToEditWorker(item){
    console.log(item);
    let navExtras: NavigationExtras = {
      queryParams:{
        worker: JSON.stringify(item)
      }
    };
    this.router.navigate(['edit-worker'],navExtras);
  }

}
