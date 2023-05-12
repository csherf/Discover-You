import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  private name: BehaviorSubject<string>;


  constructor() { 
    this.name = new BehaviorSubject<string>('');
  }

  updateName(newName: string) {
    this.name.next(newName);
  }

  getName(): Observable<string>{
    return this.name
  }


}
