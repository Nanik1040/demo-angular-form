import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit {
  constructor(private formService: FormService) {}
  studesData: any[] = [];

  ngOnInit() {
    this.formService.getFormSubj().subscribe((form) => {
      this.studesData.push(form);
      console.log(this.studesData, 'lala');
    });
  }
}
