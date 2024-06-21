import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { getUser } from './session.helper';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private messageSource = new BehaviorSubject<any>(getUser());
  currentUser = this.messageSource.asObservable();
  constructor() { 

  }
  initStore(){
  }
  changeUser(user){
    this.messageSource.next(user);
  }
}
