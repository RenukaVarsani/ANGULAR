import { Component, OnInit } from '@angular/core';
import { GetdataService } from './getdata.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  
  
  
  // changeText(){

  //   document.getElementById("text").innerHTML="Logout";
  
  // }
  
  // [x: string]: any;
  // data: any;
  // userdata:any;
  // id:any;
  // constructor(private service: GetdataService, private router: Router) { }

  // ngOnInit() {
  //   this.service.getUserData().subscribe((data) => {
  //     this.data = data;
  //   });
  

  // this.service.getDataById(this.id).subscribe((userdata) => {
  //   this.userdata = userdata;
  // });
 
}