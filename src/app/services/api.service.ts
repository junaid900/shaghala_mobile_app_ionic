import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  header: any = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    // .set('Basic', `${environment.authToken}`)
  };
  constructor(private http: HttpClient,
    private util: UtilsService) { }


  async getRequest(url: string,type="simple") {
    try {
      let data = (await this.http.get(url, this.header).toPromise()) as any;
      // console.log("api="+url, data);
      if (data) {
        if (data.status < 1 || data.status > 9) {
          // console.log(data.stats,"return null");
          this.util.showToast(data.message);
          return null
        } else {
          data.response['req_status'] = data.status;
          data.response['req_message'] = data.message;
          return data.response || {};
        }
      }
    } catch (e) {
      if(type == 'simple')
      this.util.showToast("Unfortunate Error");
      return null
    }
  }
  async postRequest(payload: any, url: string, showToast = false) {
    try {
      let data = (await this.http.post(url, payload, this.header).toPromise()) as any;
      // console.log("api", data);
      if (data) {
        if (data.status < 1 || data.status > 9) {
          this.util.showToast(data.message,4000);
          return null
        } else {
          if (showToast) {
            this.util.showToast(data.message);
          }
          data.response['req_status'] = data.status;
          data.response['req_message'] = data.message;
          return data.response || {};
        }
      }
    } catch (e) {
      console.log("error", e);
      this.util.showToast("Unfortunate Error");
      return null
    }
  }
  async simplePostRequest(payload: any, url: string,headers = null, showToast = false) {
    try {
      let header = this.header;
      if(headers){
        header = headers;
      }
      let data = (await this.http.post(url, payload, header).toPromise()) as any;
      return data;
    } catch (e) {
      console.log("error", e);
      this.util.showToast("Unfortunate Error");
      return null
    }
  }

  async postMultipartRequest(payload: FormData, url: string) {
    let header: any = {
      headers: new HttpHeaders()
        .set('Accept', 'application/json',)
      // .set('Basic', `${environment.authToken}`)
    };
    try {
      // this.http.post(url,payload,header);
      let data = (await this.http.post(url, payload).toPromise()) as any;
      // console.log("api", data);
      if (data) {
        if (data.status < 1 || data.status > 9) {
          this.util.showToast(data.message);
          return null
        } else {
          return data.response || {};
        }
      }
    } catch (e) {
      console.log("error", e);
      return null
    }
  }



}
