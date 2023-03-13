import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import {  FormGroup, FormBuilder} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { data } from './data.model';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  mydata:any;
  details: FormGroup | any;
  dataObj: data = new data();
  constructor(private service: GetdataService, private http: HttpClient,private formbuilder:FormBuilder,private api:CrudService) { }




  ngOnInit(): void {


    this.service.getUserData().subscribe((mydata) => {
         this.mydata = mydata;
       });

this.details=this.formbuilder.group({
    
      title : [''],
      des : ['']

    })
  }

  postData(){
    this.dataObj.title=this.details.value.title;
    this.dataObj.des=this.details.value.des;
    this.api.postData(this.dataObj)
    .subscribe(res=>{console.log(res);
      alert("added");
      this.details.reset();
    })
     }
getAllData(){
  this.api.getData()
  .subscribe(res=>{
    this.mydata=res;
  })
}
  
}


















