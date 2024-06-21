import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { appSettingApi, baseUrl, profileSliderApi } from '../services/api_url.hepler';
import { getLang } from '../services/local.helper';
import { getUser } from '../services/session.helper';
import { StoreService } from '../services/store.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:{delay:1500}
  };
  user: any;
  appUrl: string = baseUrl;
  profileSlides: any = [];
  isLoading: boolean = false;
  isSettingLoading: boolean = false;
  settings: any = {};
  // appUrl:string = baseUrl;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private translate: TranslateService,
    private api: ApiService,
    private util: UtilsService,
    private ss: StoreService,
    private menu: MenuController,
    private platform: Platform,
    private alertCtrl: AlertController,
  ) {
    this.platform.backButton.subscribeWithPriority(10,()=>{
      this.navCtrl.back();
    })
    this.translate.use(getLang());
    this.user = getUser();
  }
  ionViewDidEnter(){
    this.user = getUser();
  }
  async getPageData() {
    //  https://shkalah.mjcoders.com/api/profile/profile_slider
    
    this.isLoading = true;
    let response = await this.api.getRequest(profileSliderApi);
    this.isLoading = false;
    if(response){
      console.log(response);
      this.profileSlides = response;
    }

  }
  ngOnInit() {
    this.getPageData();
    this.ss.currentUser.subscribe(res=>{
      this.user = res;
    });
  }
  async getSettings(){
    // this.isSettingLoading = true;
    // let response = await this.api.getRequest(appSettingApi);
    // this.isSettingLoading = false;
    // if(response){
    //   this.settings = response;
    // }
    // console.log(response);
  }
  goBack() {
    this.navCtrl.back();
  }
  goToAddWorker() {
    if(this.user.type == "Individual"){
      if(this.user.ind_post_count > 0){
        this.router.navigate(['add-worker']);
      }else{
        new AlertController().create({
          message:"You didn't subscribed? need subscription to post any ads",
          header:"Subscription required!",
          buttons:[{
            text:"Cancel",
            handler:()=>{
  
            }
          },{
            text:"Subscribe",
            handler:()=>{
              this.goToPayment();
            }
          }]
        }).then(res=>res.present())
      }
      return;
    }
    if(this.user.is_subscribed){
      this.router.navigate(['add-worker']);
    }else{
      new AlertController().create({
        message:"You didn't subscribed? need subscription to post any ads",
        header:"Subscription required!",
        buttons:[{
          text:"Cancel",
          handler:()=>{
          }
        },{
          text:"Subscribe",
          handler:()=>{
            this.goToPayment();
          }
        }]
      }).then(res=>res.present())
    }
  }
  async goToPayment(){
    const alert = await this.alertCtrl.create({
      header: 'Select subscription.',
      backdropDismiss:false,
      buttons: [{
        text:'Ok',
        handler:(alertData)=>{
          console.log(alertData);
          if(alertData){
            if(alertData.length > 0)

            this.router.navigate(['payment'],{
              queryParams:{
                sub_type: alertData,
              }
            });
          }
        }
      }],
      inputs: [
        {
          label: await this.translate.get('Annual').toPromise(),
          type: 'radio',
          value: 'annual',
        },
        {
          label: await this.translate.get('Sami Annual').toPromise(),
          type: 'radio',
          value: 'sami_annual'
        }
      ]
    });

    await alert.present();

    
  }
  getMyWorkers(){
    this.router.navigate(['my-ads']);
  }
  goToEditWorker() {
    this.router.navigate(['add-worker']);
  }
  goToEditProfile() {
    this.router.navigate(['edit-account']);
  }

  openMenu(){
    this.menu.open();
  }

}
