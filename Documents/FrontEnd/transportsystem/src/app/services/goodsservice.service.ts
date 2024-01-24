import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsserviceService {

  baseUrl='http://localhost:8082';

  constructor(private http:HttpClient) { }

  createGood(goods: Object): Observable<Object> {
    console.log(goods);
    return this.http.post(`${this.baseUrl}/addgoods`, goods); 
  }
  getAllGoods():any
  {
    return this.http.get(`${this.baseUrl}/getAllGoods`);
  }
}
