import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonList, ModalController, NavParams, PopoverController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { getCountiesApi } from '../services/api_url.hepler';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {
  @ViewChild(IonList ,{read: ElementRef}) list : ElementRef; 
  countries = [];
  allCounties: any = [];
  selectedCountry: any = {
    // country_id: 0
  };
  isLoading: boolean = false;
  constructor(
    private api: ApiService,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.getPageData();

  }
  goBack() {
    this.popoverCtrl.dismiss();

    // try{
    //   this.modalCtrl.dismiss();
    // }catch(e){
    // }
  }
  async getPageData() {
    this.isLoading = true;
    let response = await this.api.getRequest(getCountiesApi);
    this.isLoading = false;
    console.log(response);
    if (response) {
      
      if (!this.selectedCountry.country_id) {
        let id = this.navParams.data.country.country_id;
        if (id) {
          let sCountry = response.filter((e) => {
            return id == e.country_id;
          });
          const index = response.findIndex(e => {
            if (id == e.country_id) {
              return true;
            }
            return false;
          });
          console.log(index);
          sCountry['index'] = index;
          console.log(sCountry);
          if(sCountry.length > 0){
            this.selectedCountry = sCountry[0];
            this.scrollTo(sCountry.index);
          }
          console.log(this.selectedCountry);

        }
      }
      this.countries = response;
      this.allCounties = response;
    }
  }
  selectCountry(c: any, i: any) {
    c['index'] = i;
    console.log(c);
    this.selectedCountry = c;
    if(this.selectedCountry){
      // try{
      // this.modalCtrl.dismiss({country:this.selectedCountry});

        // this.modalCtrl.dismiss();
      // }catch(e){
        this.popoverCtrl.dismiss({country:this.selectedCountry});
      // }
    }
  }
  
  scrollTo(index){
    setTimeout(()=>{
      // console.log("index",index);
      let arr = this.list.nativeElement.children;
      // console.log("arr",arr.length);
      let item = arr[index];
      item.scrollIntoView();
      // console.log("item",item);
    },500)
   

  }
  

}
