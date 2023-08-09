import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}
  private formSubject = new Subject<string[]>();

  postFormSubj(form: string[]) {
    this.formSubject.next(form);
  }
  getFormSubj() {
    return this.formSubject.asObservable();
  }
}
