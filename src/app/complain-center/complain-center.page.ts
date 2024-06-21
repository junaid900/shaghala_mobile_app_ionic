import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '@capacitor/device';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { addComplainApi, departmentApi } from '../services/api_url.hepler';
import { getUser } from '../services/session.helper';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-complain-center',
  templateUrl: './complain-center.page.html',
  styleUrls: ['./complain-center.page.scss'],
})
export class ComplainCenterPage implements OnInit {

  selectedType: any = 'comp';
  isLoading: boolean = false;
  deptList: any = [];
  formData: any = {};
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private translate: TranslateService,
    private api: ApiService,
    private util: UtilsService,
  ) { }
  async getPageData() {
    this.isLoading = true;
    var response = await this.api.getRequest(departmentApi);
    this.isLoading = false;
    this.deptList = response;
    if (response) {
      console.log(response);
      this.deptList = response;
    }

  }

  ngOnInit() {
    this.getPageData();
  }
  goBack() {
    this.navCtrl.back();
  }
  changeType(type) {
    this.selectedType = type;
  }

  async send() {
    if (!this.formData.dept_id) {
      this.util.showToast("Please select a department");
      return;
    }
    if (!this.formData.message) {
      this.util.showToast("Please message field cannot be empty");
      return;
    }
    if (this.formData.message.length < 10) {
      this.util.showToast('Message length must be greater then 10');
      return;
    }
    if (getUser().type != 'local')
      this.formData.user_id = getUser().user_id;
    else
      this.formData.user_id = (await Device.getId()).uuid;
    this.formData.type = this.selectedType == "comp" ? "Complain" : "Suggestion";
    this.util.showProgressDialog();
    var response = await this.api.postRequest(this.formData, addComplainApi);
    this.util.hideProgressDialog();
    if (response) {
      console.log(response);
      this.navCtrl.back();
    }
  }

}
