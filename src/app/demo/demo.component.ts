import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DemoService } from '../demo.service';
import { NgForm } from '@angular/forms';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from '@angular/animations';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  age: string;
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private demoService: DemoService
  ) {}
  ngOnInit() {}
  submit() {
    console.log('clicked');
    this.demoService.sendAge(this.age);
  }
  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('etered', form.value);
      const formData = form.value; // Get the entire form data object
      // Handle form submission, e.g., send formData to an API
      console.log(formData);
      this.demoService.sendAge(form.value);
    } else {
      // Handle form validation errors
    }
  }
}
