import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  [x: string]: any;
  data: any;
  userdata:any;
  id:any;

  constructor(private service: GetdataService, private router: Router) { }

  ngOnInit() {
    this.service.getUserData().subscribe((data) => {
      this.data = data;
    });
  

  this.service.getDataById(this.id).subscribe((userdata) => {
    this.userdata = userdata;
  });
 
}





}
