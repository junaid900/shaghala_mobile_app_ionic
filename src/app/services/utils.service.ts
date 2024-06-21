import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { getLang } from './local.helper';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  loading: HTMLIonLoadingElement;
  constructor(private loadingController: LoadingController,
    private toastController: ToastController,private translate: TranslateService) { 

  }

  translateLang(){
    // this.translate.onLangChange
  }

  async showProgressDialog(message:any = 'Please wait',isDismissable = false){
    this.loading = await this.loadingController.create({
      message: message,
      backdropDismiss: isDismissable,
    });
    this.loading.present();
  }
  async hideProgressDialog(){
    if(this.loading){
      this.loading.dismiss();
    }
  }
  async showDynamicToast (message:any,duration = 3000,pos="bottom") {
    this.toastController.create({
      message: message,
      duration: duration,
      color:"tertiary",
      icon:"information-circle",
      position: pos != 'top' ? 'bottom':'top',
      buttons:[
        {
          text:"close"
        }
      ]
    }).then(res=>{
      res.present();
    });
  }
  async showToast (message:any,duration = 3000) {
    this.toastController.create({
      message: message,
      duration: duration,
      color:"tertiary",
      icon:"information-circle",
      buttons:[
        {
          text:"close"
        }
      ]
    }).then(res=>{
      res.present();
    });
  }
}
