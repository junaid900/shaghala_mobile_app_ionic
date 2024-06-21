import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { getLang, setLanguage } from '../services/local.helper';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  selectedType: any = 'en';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private translate: TranslateService,
  ) {
    this.translate.use(getLang());
    if(getLang() == "ar"){
      this.selectedType = 'ar';
    } 
   }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
  changeType(type){
    this.selectedType = type;
    if(type == 'en'){
      setLanguage('en');
    }else{
      setLanguage('ar');
    }
    location.reload();

  }
}
