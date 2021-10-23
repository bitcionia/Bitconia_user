import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {
  public activityMsg = new BehaviorSubject<any>("");
  public countdata = [];

  activityLogShare = this.activityMsg.asObservable();
  countshare = this.activityMsg.asObservable();

  constructor(
  ) { }

 
  activity(data) {
    this.activityMsg.next(data);
  }
  // countdata(data) {
  //   this.count.next(data);
  // }
}
