import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetdataService } from '../getdata.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
mydata:any;

  constructor(private service: GetdataService, private http: HttpClient) { }

  ngOnInit(): void {
  this.service.getData().subscribe((mydata) => {
    this.mydata = mydata;
  });

}}
