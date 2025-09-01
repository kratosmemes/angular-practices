import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  private inputValueSource = new BehaviorSubject<string>('');
  inputValue$ = this.inputValueSource.asObservable();
  
  setInputValue(value: string) {
    this.inputValueSource.next(value);
  }
}
