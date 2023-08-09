import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../form.service';
@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent implements OnInit {
  constructor(private formService: FormService) {}
  studData: any[] = [];
  name: any;
  numb: any;
  school: any;
  age: any;
  ngOnInit() {}
  submitForm(form: NgForm) {
    console.log(form.value);
    this.studData.push(form.value);
    console.log(this.studData);
    this.formService.postFormSubj(this.studData);
    this.studData = [];
    form.reset();
  }
}
