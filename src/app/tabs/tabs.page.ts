import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { getNotificationCount, getUserByIdApi, getWorkerByUserApi } from '../services/api_url.hepler';
import { generateLocalUser } from '../services/constrant.helper';
import { getUser, logout, setUser } from '../services/session.helper';
import { StoreService } from '../services/store.service';
import { loadUser } from '../store/user/user.action';
import { selectUser } from '../store/user/user.selector';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  // storage:Storage;
  public user = this.store.select(selectUser);
  subDialog: boolean = false;
  notifications: 0;
  interval: any;
  constructor(private store: Store,
    private router: Router,
    private api: ApiService,
    private storeService: StoreService,
    private alertCtrl: AlertController,
    private translate: TranslateService,
    ) {
    this.getData();
  }
  async getData() {
    this.storeService.initStore();
    // this.showDialog();
  }
  ionViewDidEnter() {
    let user = getUser();
    if (!user.type) {
      generateLocalUser();
    }
    if (user.type != 'local') {
      this.checkUser(user);
      this.setNotificationInterval();
    }
  }
  ionViewDidLeave() {
    // this.interval.cancel()
    if (this.interval)
      clearInterval(this.interval);
  }
  setNotificationInterval() {
    this.interval = setInterval(() => {
      console.log("here");
      if (getUser())
        if (getUser().type != 'local')
          this.startNotification();
    }, 5000)
  }
  ngOnInit() {

    this.storeService.currentUser.subscribe(user => {
      console.log("Store User", user);
      if (user.type == "Company") {
        if (user.is_subscribed) {
          this.hideDialog();
        } else {
          this.showDialog();
        }
      }
    });

  }
  async checkUser(user) {
    console.log("checkUser", user);
    user = getUser();
    if (user.is_subscribed) {
      this.hideDialog();
    }
    var response = await this.api.getRequest(getUserByIdApi + "/" + user.user_id);
    console.log('tabs');
    console.log(response);
    console.log("user_response", response);
    if (response) {
      setUser(response);
      this.storeService.changeUser(response);
      if (response.type == "Company") {
        if (response.is_subscribed) {
          this.hideDialog();
        } else {
          this.showDialog();
        }
      }
    } else {
      console.log("session expired");
      logout();
      generateLocalUser();
      this.router.navigate(['login']);
      this.hideDialog();
      this.storeService.changeUser({});
    }

  }
  showDialog() {
    this.subDialog = true;
  }
  hideDialog() {
    this.subDialog = false;
  }
  async goToPayment() {
    // async goToPayment(){
      const alert = await this.alertCtrl.create({
        header: 'Select subscription',
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
  
      
    // }
    // this.router.navigate(['payment']);
  }
  async startNotification() {
    var response = await this.api.getRequest(getNotificationCount + "/" + getUser().user_id,"notification");
    // console.log("notify_response", response);
    if (response) {
      this.notifications = response.count;
    }
  }

}
