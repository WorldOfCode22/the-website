import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message = '';
  private multiCaster: Subject<string>;

  constructor() {
    this.multiCaster = new Subject();
  }

  get Message() { return this.message; }
  set Message(NewMessage: string) {
    this.message = NewMessage;
    this.multiCaster.next(NewMessage);
  }
  get Listener() { return this.multiCaster.asObservable(); }
}
