import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Key } from 'src/app/models/Key';

@Injectable({
  providedIn: 'root'
})
export class KeyDataService {

  key: Key;

  public messageSource = new BehaviorSubject(this.key);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(key: Key) {
    this.messageSource.next(key);
  }
}
