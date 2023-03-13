import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/userDetails');
   
  } 

  getUserData(): Observable<any> {
    return this.http.get('http://localhost:3000/blogDetails');
   
  } 

  getDataById(id: number) {
    return this.http.get(`http://localhost:3000/blogDetails/${id}`);
  }
  
  

}
