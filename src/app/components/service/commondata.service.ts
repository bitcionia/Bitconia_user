import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {

  public activityMsg = new BehaviorSubject<any>("");

  activityLogShare = this.activityMsg.asObservable();

  constructor(
  ) { }

 
  activity(data) {
    this.activityMsg.next(data);
  }
}
