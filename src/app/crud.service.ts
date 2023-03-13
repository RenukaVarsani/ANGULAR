import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  postData(data:any){
    return this.http.post<any>("http://localhost:3000/blogDetail",data)
    .pipe(map((res:any)=>{return res;}))
    
}


getData(){
  return this.http.get<any>("http://localhost:3000/blogDetail")
    .pipe(map((res:any)=>{return res;}))
    
}

updateData(data:any,id:number){
  return this.http.put<any>("http://localhost:3000/blogDetail"+id,data)
    .pipe(map((res:any)=>{return res;}))
}

deleteData(id:number){
  return this.http.delete<any>("http://localhost:3000/blogDetail"+id)
    .pipe(map((res:any)=>{return res;}))
    
}




}
