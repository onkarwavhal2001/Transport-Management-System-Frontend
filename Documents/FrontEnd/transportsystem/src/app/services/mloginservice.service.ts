import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MloginserviceService {


  baseUrl='http://localhost:8082';
  
  constructor(private http:HttpClient) { }

  createMLogin(mlogin: Object): Observable<Object> {
    console.log(mlogin);
    return this.http.post(`${this.baseUrl}/addmlogin`, mlogin); 
  }}
