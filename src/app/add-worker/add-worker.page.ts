import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { addWorkerApi, getWorkerPageApi, uploadCVWorkerApi } from '../services/api_url.hepler';
import { getLang } from '../services/local.helper';
import { getUser } from '../services/session.helper';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.page.html',
  styleUrls: ['./add-worker.page.scss'],
})
export class AddWorkerPage implements OnInit {
  isLoading: boolean = false;
  pageData: any = {};
  formData: any = {};
  baseImage: string = '';
  user: any = {};
  cvFile: File = null;
  // scrollItems: number[] = new Array(1000);
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private api: ApiService,
    private translate: TranslateService,
    private util: UtilsService
  ) {
    translate.use(getLang());
    this.user = getUser();
  }

  ngOnInit() {
    this.getPageData();
  }
  async takeImage() {
    const image = await Camera.getPhoto({
      quality: 20,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    var imageUrl = image.base64String;
    this.baseImage = "data:image/gif;base64," + imageUrl;

    // this.uploadImage(imageUrl);
    // console.log(imageUrl);    
  }
  async getPageData() {
    this.isLoading = true;
    var response = await this.api.getRequest(getWorkerPageApi);
    this.isLoading = false;
    if (response) {
      this.pageData = response;
      console.log(this.pageData);
    }
  }

  goBack() {
    this.navCtrl.back();
  }
  goToPayment() {
    this.router.navigate(['payment']);
  }
  async submit() {
    console.log(this.formData);
    // console.log(/^[a-zA-Z ]+$/i.test(this.formData.en_name));
    // console.log(this.formData.en_name.match(/^[a-zA-Z]+$/i))

    try {
      if (this.baseImage.length < 1) {
        this.util.showToast("Please select some image");
        return;
      }
      var image = this.baseImage.split('base64,')[1]
      if (!this.formData.no_of_childs) {
        this.formData.no_of_childs = 0;
        this.formData.have_childs = "No";
      }
      if (!this.formData.en_name) {
        this.util.showToast("Invalid name");
        return;
      }

      if(!/^[a-zA-Z ]+$/.test(this.formData.en_name)){
        this.util.showToast("Only alphabet a-z are allowed in english name");
        return;
      }
      if (!this.formData.ar_name) { 
        this.util.showToast("Invalid arabic name");
        return;
      }
      if(/[0-9]/gm.test(this.formData.ar_name)){
        this.util.showToast("Only alphabet a-z are allowed in arabic name");
        return;
      }
      if (!this.formData.phone) {
        this.util.showToast("Invalid phone");
        return;
      }
      // console.log(!/^[0-9\+]+/i.test(this.formData.phone));
      // console.log(this.formData.phone.match(/^[0-9\+]+/))
      if(!/^[0-9]+$/.test(this.formData.phone.toString())){
        this.util.showToast("Only alphabet 0-9 are allowed in phone");
        return;
      }
      if (!this.formData.salary) {
        this.util.showToast("Invalid salary");
        return;
      }
      if (this.formData.salary < 1) {
        this.util.showToast("Salary cannot be less then 1");
        return;
      }
      if (!this.formData.en_religion) {
        this.util.showToast("Invalid religion");
        return;
      }
      if (!this.formData.arabic_level) {
        this.util.showToast("Invalid arabic level");
        return;
      }
      if (!this.formData.age) {
        this.util.showToast("Invalid age");
        return;
      }
      if(!/^[0-9]+$/.test(this.formData.age.toString())){
        this.util.showToast("Only alphabet 0-9 are allowed in age");
        return;
      }
      if (!this.formData.is_married) {
        this.util.showToast("Select if you are married or not");
        return;
      }
      if (!this.formData.experience) {
        this.util.showToast("Invalid experience");
        return;
      }
      if (!this.formData.edu_id) {
        this.util.showToast("Education not selected");
        return;
      }
      if (!this.formData.skin_color) {
        this.util.showToast("Invalid skin color");
        return;
      }
      if (!this.formData.skill_id) {
        this.util.showToast("Please select skill");
        return;
      }
      if (this.formData.skill_id.length < 1) {
        this.util.showToast("Please select at least one skill");
        return;
      }

      let skills = [];

      for (let i = 0; i < this.formData.skill_id.length; i++) {
        skills.push(JSON.parse(this.formData.skill_id[i]));
      }
      this.formData.skill_id = JSON.stringify(skills);

      if (!this.formData.height) {
        this.util.showToast("Invalid height");
        return;
      }
      
      if (!this.formData.weight) {
        this.util.showToast("Invalid weight");
        return;
      }
      if (!this.formData.place_of_birth_id) {
        this.util.showToast("Please select place of birth");
        return;
      }
      if (!this.formData.advs_type) {
        this.util.showToast("Please select advertisment type");
        return;
      }
      if (!this.formData.advs_type) {
        this.util.showToast("Please select advertisment type");
        return;
      }
      if (!this.user.user_id) {
        this.util.showToast("Please select advertisment type");
        return;
      }
      if (this.cvFile == null) {
        this.util.showToast("Please select CV");
        return;
      }
      this.formData.user_id = this.user.user_id;
      this.formData.image = image;
      this.util.showProgressDialog();
      var response = await this.api.postRequest(this.formData, addWorkerApi);
      this.util.hideProgressDialog();
      console.log(response);
      if (response) {
        // if (response.req_status == 4) {
          // this.util.showToast(response.req_message);
          // this.router.navigate(["payment"]);
          // return;
        // }
        let formData = new FormData();
        formData.append('file', this.cvFile);
        formData.append('id', response.worker_id);

        // console.log(formData.get('name'));
        console.log(formData.get('file'));
        this.util.showProgressDialog("Uploading CV");
        var response2 = await this.api.postMultipartRequest(formData, uploadCVWorkerApi);
        this.util.hideProgressDialog();
        if (response2) {
        }
        this.navCtrl.back();
        console.log(response2);
      }



    } catch (e) {
      console.log(e);

    }
  }
  async selectCV() {
    console.log("here");
    document.getElementById('cv-input-field').click();
  }
  async changeCV(ev) {
    console.log(ev);
    try {
      if (ev.target.files.length > 0) {
        this.cvFile = ev.target.files[0];
        console.log(this.cvFile);

      } else {
        this.util.showToast("no file selected");
      }
    } catch (e) {
      console.log(e);
      this.util.showToast("Unfortunate error");
    }

  }
  public focusInput(event): void {

    setTimeout(() => {
      let total = 0;
      let container = null;

      const _rec = (obj) => {

        total += obj.offsetTop;
        const par = obj.offsetParent;
        if (par && par.localName !== 'ion-content') {
          _rec(par);
        } else {
          container = par;
        }
      }
      _rec(event.target);
      container.scrollToPoint(0, total - 50, 400);
    }, 300)
  }
  jsonData(data) {
    return JSON.stringify(data);
  }

}
