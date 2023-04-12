import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsHomeService {
  private isHome: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    this.isHome.next('true');
  }

  public setFalse(): BehaviorSubject<string> {
    this.isHome.next('false');
    console.log('fal');
    return this.isHome;
  }
  public setTrue(): BehaviorSubject<string> {
    this.isHome.next('true');
    console.log('tru');

    return this.isHome;
  }
  public getIsHome() {
    return this.isHome;
  }

  /*  setFalse() {
    console.log('false');

    // this.isHome = false;
  }
  setTrue() {
    console.log('true');

    // this.isHome = true;
  } */
}
