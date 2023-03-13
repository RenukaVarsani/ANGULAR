import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GetdataService } from './getdata.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { Router } from 'express';
//import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormControl, FormGroup, } from '@angular/forms';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AdminPanelComponent } from './adminpanel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    HomeComponent,
    BlogDetailsComponent,
    CrudComponent,
    UserComponent,
    BlogComponent
  
  ],
  imports: [
    BrowserModule,
   CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // FormControl,
    FormsModule,RouterModule,
   
     


  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
