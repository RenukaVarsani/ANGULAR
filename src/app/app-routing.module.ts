import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './adminpanel/admin-panel.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [

  { path: "adminpanel", component: AdminPanelComponent },
  { path: "", component: HomeComponent },
  { path: "adminpanel/crud", component: CrudComponent },
  { path: "blogdetails/:id", component: BlogDetailsComponent },
  { path: "adminpanel/crud/user", component:UserComponent },
  { path: "adminpanel/crud/blog", component:BlogComponent },
  
  
  
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
