import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  constructor(private demoService: DemoService) {}
  age: string[] = [];
  ngOnInit() {
    this.demoService.getAge().subscribe((form) => {
      this.age.push(form);
    });
  }
}
