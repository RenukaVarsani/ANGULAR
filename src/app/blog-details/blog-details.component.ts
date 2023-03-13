import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { GetdataService } from '../getdata.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogdata: any;
  mydata: any;
  id: any;
  data: any;
  itemData: any;
  itemId: any;
  constructor(private service: GetdataService, private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getUserData().subscribe((blogdata) => {
      this.blogdata = blogdata;

    });

    this.service.getData().subscribe((mydata) => {
      this.mydata = mydata;
    });

    this.itemId = this.route.snapshot.paramMap.get('id');
        this.service.getDataById(this.itemId).subscribe((data) => {
      this.data = data;
    });
  }






}



 








