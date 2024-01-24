import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantserviceService {

  baseUrl='http://localhost:8082';
  
  constructor(private http:HttpClient) { }

  createMerchant(merchant: Object): Observable<Object> {
    console.log(merchant);
    return this.http.post(`${this.baseUrl}/addmerchant`, merchant); 
  }
  getAllSeeds():any
  {
    return this.http.get(`${this.baseUrl}/getAllSeeds`);
  }

  getAllMerchants():any
  {
    return this.http.get(`${this.baseUrl}/getAllMerchants`);
  }
  deleteMerchant(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteMerchant/${id}`, { responseType: 'text' });
  }
  getOneMerchant(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getMerchant/${id}`);
  }
  updateMerchant(merchant:object){
    return this.http.put(`${this.baseUrl}/updateMerchant`,merchant);
  }}
