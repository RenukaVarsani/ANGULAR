import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { FormControl, FormGroup, } from '@angular/forms';
import { ServiceService } from './service.service';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent{
 
    
  

  login: FormGroup | any;
  data: any;
  target_name: any;
isAdmin:any=false;

  constructor(private http: HttpClient, private router: Router, private service: GetdataService) { }

  ngOnInit(): void {

  this.login = new FormGroup({
      'fname': new FormControl(),
      'password': new FormControl()
    })

    this.service.getData().subscribe((data) => {
      this.data = data;
    });

  }


  logindata(login: FormGroup) {
    //     console.log(this.login.value);
    this.service.getData()
      .subscribe(res => {
        // console.log(res);
        
        const user = res.find((a: any) => {
          return a.name === this.login.value.fname && a.password === this.login.value.password
        });

      
            
        if (user) {

          this.target_name = this.login.get('')?.value; 

          // const userRole = this.data.find((role: any) => role.name === this.target_name);
          const userRole = user.role
          if (userRole === 'admin') {
            this.isAdmin = true;
            alert('you are successfully login');
            console.log(this.isAdmin);
            this.router.navigate(['/adminpanel/crud'])
            
          }
          else {
            this.isAdmin = false;
          }
                     
          
        }


      }, err => {
        alert('Something was wrong');
      })
    }
  }






    // this.target_name = (<HTMLInputElement>document.getElementById("fname")).value;

    // const userRole = this.userdata.find((role: any) => role.name === this.target_name);

    // if (userRole && userRole.role === 'admin') {
    //   this.isAdmin = true;
    // }
    // else {
    //   this.isAdmin = false;
    // }



//     // onSubmit() {
//     //     console.log(this.formValues);
//     // }

//     // constructor(private http: HttpClient, private getDataService: GetdataService) {

//     // }
//     // ngOnInit(): void {
//     //   this.getDataService.getUserData().subscribe((data: any) => {
//     //     this.data = data;
//     //       })
//     // }

//     // isadmin = false;
//     // target_name = this.myform.get('user')?.value; 


//     // if(myuser: any) {
//     //   const userRole = this.data.find((role: any) => role.name === this.target_name);


//     //   if (userRole && userRole.role === 'admin') {
//     //     this.isadmin = true;
//     //   }
//     //   else {
//     //     this.isadmin = false;
//     //   }

//     // }


//   }




// function logindata(login: any, FormGroup: typeof FormGroup) {
//   throw new Error('Function not implemented.');
// }

