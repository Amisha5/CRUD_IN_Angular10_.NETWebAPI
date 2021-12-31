import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  readonly APIUrl="https://localhost:44325/api/";
  constructor(public http:HttpClient) { }

  getDepartmentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'Department');
  }
  addDepartment(val:any)
  {
    return this.http.post(this.APIUrl+'Department',val);
  }
  deleteDepartment(val:any)
  {
    return this.http.delete(this.APIUrl+'Department/'+val);
  }
  updateDepartment(val:any)
  {
    return this.http.put(this.APIUrl+'Department/',val);
  }

}
