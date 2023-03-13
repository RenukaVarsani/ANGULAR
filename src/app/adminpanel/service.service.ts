import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetdataService } from '../getdata.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  login: FormGroup | any;
  userdata: any;
  target_name: any;
  isAdmin: any = false;
  constructor(private http: HttpClient, private router: Router, private service: GetdataService) {
    // const apiurl = 'http://localhost:3000/userDetails';

  
    // Getbycode(code: any)
    // { 
    //   return this.http.get(this.apiurl + '/' + code);
    // }
  }

  ngOnInit(): void {

    this.login = new FormGroup({
      'fname': new FormControl(),
      'password': new FormControl()
    })

    this.service.getUserData().subscribe((userdata) => {
      this.userdata = userdata;
    });

  }
}


//   logindata(login: FormGroup) {
//     // console.log(this.login.value);
//     this.http.get<any>("http://localhost:3000/userDetails")
//       .subscribe(res => {
//         const user = res.find((a: any) => {
//           return a.fname === this.login.value.fname && a.password === this.login.value.password
//         });

//         if (user) {
//           alert('you are successfully login');

//           this.router.navigate(['CrudComponent']);
//         }


//       }, err => {
//         alert('Something was wrong');
//       })
//     }
// }
