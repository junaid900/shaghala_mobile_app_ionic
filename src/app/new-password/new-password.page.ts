import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { resetPasswordSave } from '../services/api_url.hepler';
import { convertFromBase64 } from '../services/constrant.helper';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {
  data: any = {};
  error: boolean = false;
  password: any  = '';
  confirmPassword:any = '';
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private util: UtilsService,
    private api: ApiService,
    private translation: TranslateService
  ) {
    this.route.queryParams.subscribe(res=>{
      console.log(res);
      if(res.data){
        try{
          this.data = JSON.parse(convertFromBase64(res.data));
          console.log(this.data);
        }catch(e){
          console.log(e);
          this.error = true;
        }
      }
    })

   }
   async resetPassword(){
      if(!this.data.user_id){
        this.util.showToast("Invalid request");
        return;
      }
      if(this.password.length < 8){
        this.util.showToast("Phone number length cannot be less then 8");
        return;
      }
      if(this.password != this.confirmPassword){
        this.util.showToast("confirm password don't match");
        return;
      }
      this.util.showProgressDialog();
      var payload = {
        user_id: this.data.user_id,
        password: this.password
      };
      var response = await this.api.postRequest(payload, resetPasswordSave);
      this.util.hideProgressDialog();
      if (response) {
        this.util.showToast(response.req_message);
        console.log(response);
        this.router.navigate(['login']);
        // this.userResponse= response;
        // this.signinWithPhone();
      }
    
   }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }


}
