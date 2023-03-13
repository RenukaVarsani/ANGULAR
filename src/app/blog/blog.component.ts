import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { ActivatedRoute } from '@angular/router';
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
  row:any;
  id:any;
  details: FormGroup | any;
  showAdd! : boolean;
  showUpdate! : boolean;
  dataObj: data = new data();
  itemId:any;
  title: any;
  constructor(private service: GetdataService, private http: HttpClient,private formbuilder:FormBuilder,private api:CrudService,private route:ActivatedRoute) { }




  ngOnInit(): void {


    this.service.getUserData().subscribe((mydata) => {
         this.mydata = mydata;
       });

this.details=this.formbuilder.group({
    
      title : [''],
      des : ['']

    })

    // this.itemId = this.route.snapshot.paramMap.get('id');
    //     this.service.getDataById(this.itemId).subscribe((mydata) => {
    //   this.mydata = mydata;
    // });


  

  }


  
  clickAddData(){
    this.details.reset();
    // this.showAdd = true;
    // this.showUpdate= false;
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


deleteData(row:any){
  this.api.deleteData(row.id)
  .subscribe(res=>{
  alert("deleted")
  this.getAllData()
  })
}  

onEdit(row:any){

// this.http.get("http://localhost:3000/blogDetails")
// .subscribe(data=>this.details.patchValue(data));
  
  //  this.showAdd = false;
  //  this.showUpdate= true;
  this.details.controls['title'].setValue(row.title);
  this.details.controls['des'].setValue(row.description);
  //this.details.controls['des'].setValue(row.des);
}

updateData(){
  this.dataObj.title = this.details.value.title;
  this.dataObj.des = this.details.value.des;
  this.api.updateData(this.dataObj,this.dataObj.id)
  .subscribe(res=>{console.log(res);
    alert("update");

  }) 

  
}
}



















