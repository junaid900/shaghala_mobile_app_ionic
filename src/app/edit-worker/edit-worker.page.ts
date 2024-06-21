import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { addWorkerApi, baseUrl, getWorkerPageApi, updateWorkerApi, uploadCVWorkerApi, workerDetailApi } from '../services/api_url.hepler';
import { getLang } from '../services/local.helper';
import { getUser } from '../services/session.helper';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.page.html',
  styleUrls: ['./edit-worker.page.scss'],
})
export class EditWorkerPage implements OnInit {
  isLoading: boolean = false;
  pageData: any = {};
  formData: any = {};
  baseImage: string = '';
  user: any = {};
  worker: any = {};
  cvFile: File = null;
  constructor(private navCtrl: NavController, private route: ActivatedRoute,
    private translate: TranslateService,
    private api: ApiService,
    private router: Router,
    private util: UtilsService) {
    this.user = getUser();
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.worker) {
        this.worker = JSON.parse(params.worker);
        console.log(this.worker);
        this.getPageData();
        this.getWorker();
      }
    })
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
    // return;
    this.isLoading = true;
    var response = await this.api.getRequest(getWorkerPageApi);
    this.isLoading = false;
    if (response) {
      this.pageData = response;
      console.log(this.pageData);

    }
  }
  async getWorker() {
    // this.isLoading = true;
    let response = await this.api.getRequest(workerDetailApi + '/' + this.worker.worker_id + "?lang=" + getLang());
    // this.isLoading = false;
    if (response) {
      console.log(response);
      this.worker = response;

      this.baseImage = baseUrl + this.worker.image;
      this.formData.no_of_childs = this.worker.no_of_childs;
      this.formData.en_name = this.worker.en_name;
      this.formData.ar_name = this.worker.ar_name;
      this.formData.phone = this.worker.phone;
      this.formData.en_religion = this.worker.en_religion;
      this.formData.arabic_level = this.worker.arabic_level;
      this.formData.age = this.worker.age;
      this.formData.is_married = this.worker.is_married;
      this.formData.experience = this.worker.experience;
      this.formData.edu_id = this.worker.edu_id;
      this.formData.skin_color = this.worker.skin_color;
      this.formData.height = this.worker.height;
      this.formData.weight = this.worker.weight;
      this.formData.place_of_birth_id = this.worker.place_of_birth_id;
      this.formData.advs_type = this.worker.advs_type;
      this.formData.user_id = this.worker.user_id;
      this.formData.place_of_living_id = this.worker.place_of_living_id;
      this.formData.remarks = this.worker.remarks;
      let skills = JSON.parse(this.worker.skill_id);
      this.worker.skill_id = [];
      skills.forEach(element => {
        this.worker.skill_id.push(JSON.stringify(element));
      });
      this.formData.skill_id = this.worker.skill_id;
      this.formData.salary = this.worker.salary;
      console.log(this.formData);
    }
  }

  goBack() {
    this.navCtrl.back();
  }
  goToPayment() {
    this.router.navigate(['payment']);
  }
  async submit() {
    // return;
    console.log(this.formData);
    try {
      console.log(this.worker.worker_id);
      if (this.worker.worker_id) {
        this.formData.worker_id = this.worker.worker_id;
      }
      if (!this.formData.worker_id) {
        this.util.showToast("Cannot find worker");
        return;
      }
      if (this.baseImage.length < 1) {
        this.util.showToast("Please Select Some Image");
        return;
      }
      var image: any = this.baseImage.split('base64,');
      if (image.length > 1) {
        image = this.baseImage.split('base64,')[1];
      } else {
        image = null;
        // image = this.worker.image;
      }
      if (!this.formData.no_of_childs) {
        this.formData.no_of_childs = 0;
        this.formData.have_childs = "No";
      }
      if (!this.formData.skill_id) {
        this.util.showToast("Please select skill");
        return;
      }
      if(this.formData.skill_id.length < 1){
        this.util.showToast("Please select at least one skill");
        return;
      }

      let skills = [];

      for(let i = 0 ; i < this.formData.skill_id.length ; i++){
        skills.push(JSON.parse(this.formData.skill_id[i]));
      }
      this.formData.skill_id = JSON.stringify(skills);
      // if (!this.formData.en_name) {
      //   this.util.showToast("Invalid Name");
      //   return;
      // }
      // if (!this.formData.ar_name) {
      //   this.util.showToast("Invalid Arabic Name");
      //   return;
      // }
      // if (!this.formData.phone) {
      //   this.util.showToast("Invalid Phone");
      //   return;
      // }

      // if (!this.formData.en_religion) {
      //   this.util.showToast("Invalid Phone");
      //   return;
      // }
      // if (!this.formData.arabic_level) {
      //   this.util.showToast("Invalid Arabic Level");
      //   return;
      // }
      // if (!this.formData.age) {
      //   this.util.showToast("Invalid Age");
      //   return;
      // }
      // if (!this.formData.is_married) {
      //   this.util.showToast("MARRIED Not selected");
      //   return;
      // }
      // if (!this.formData.experience) {
      //   this.util.showToast("Invalid Experience");
      //   return;
      // }
      // if (!this.formData.edu_id) {
      //   this.util.showToast("Education Not selected");
      //   return;
      // }
      // if (!this.formData.skin_color) {
      //   this.util.showToast("Invalid Skin Color");
      //   return;
      // }
      // if (!this.formData.height) {
      //   this.util.showToast("Invalid Height");
      //   return;
      // }
      // if (!this.formData.weight) {
      //   this.util.showToast("Invalid Weight");
      //   return;
      // }
      // if (!this.formData.place_of_birth_id) {
      //   this.util.showToast("Please select place of birth");
      //   return;
      // }
      // if (!this.formData.advs_type) {
      //   this.util.showToast("Please select advertisment type");
      //   return;
      // }
      // if (!this.user.user_id) {
      //   this.util.showToast("Please select advertisment type");
      //   return;
      // }

      // if (this.cvFile == null) {
      //   this.util.showToast("Please select CV");
      //   return;
      // }
      this.formData.user_id = this.user.user_id;
      if (image){
        this.formData.image = image;
      }
      console.log(this.formData);
      this.util.showProgressDialog();
      var response = await this.api.postRequest(this.formData, updateWorkerApi);
      this.util.hideProgressDialog();
      console.log(response);
      if (response) {
        if (this.cvFile != null) {
          let formData = new FormData();
          formData.append('file', this.cvFile);
          formData.append('id', response.worker_id);

          // console.log(formData.get('name'));
          console.log(formData.get('file'));
          this.util.showProgressDialog("Uplaoding CV");
          var response2 = await this.api.postMultipartRequest(formData, uploadCVWorkerApi);
          this.util.hideProgressDialog();
          if (response2) {

          }
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
    setTimeout(()=>{
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
    },300)
    
  }
  jsonData(data){
    return JSON.stringify(data);
  }
}
