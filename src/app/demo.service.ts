import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private ageSubject = new Subject<string>();
  sendAge(age: string) {
    this.ageSubject.next(age);
  }
  getAge() {
    return this.ageSubject.asObservable();
  }
}
