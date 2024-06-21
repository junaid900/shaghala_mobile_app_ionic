import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { MenuController } from '@ionic/angular';
import { apiUrl } from '../helpers/url.helper';
import { ApiService } from '../services/api.service';
import { getUserNotification, readNotificationApi, workerApi } from '../services/api_url.hepler';
import { getUser } from '../services/session.helper';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.page.html',
  styleUrls: ['./notification-list.page.scss'],
})
export class NotificationListPage implements OnInit {
  isLoading: boolean = false;
  user: any = getUser();
  notifications: any = [];
  constructor(
    private menu: MenuController,
    private api: ApiService
    // private
  ) {
    this.getPageData();
  }

  ngOnInit() {
   
  }
  ionViewDidEnter() {
    this.user = getUser();
    this.readNotification();
  }
  async getPageData() {
    this.isLoading = true;
    let response = await this.api.postRequest({
      user_id: this.user.user_id
    }, getUserNotification);
    this.isLoading = false;
    if (response) {
      console.log("notification", response);
      this.notifications = response;
    }
  }

  openMenu() {
    this.menu.open();
  }
  async readNotification() {
    this.user = getUser();
    let response = await this.api.postRequest({
      user_id: this.user.user_id
    }, readNotificationApi + "/"+this.user.user_id);
  }

}
