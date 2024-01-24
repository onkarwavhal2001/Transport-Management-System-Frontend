import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerserviceService 
{
  baseUrl='http://localhost:8082';
  
  constructor(private http:HttpClient) { }

  createFarmer(farmer: Object): Observable<Object> {
    console.log(farmer);
    return this.http.post(`${this.baseUrl}/addfarmer`, farmer); 
  }

  loginFarmer(Login: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/loginFarmer`, Login)
  };

  getAllFarmer():any
  {
    return this.http.get(`${this.baseUrl}/getAllFarmer`);
  }
  deleteFarmer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteFarmer/${id}`, { responseType: 'text' });
  }
  getOneFarmer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getFarmer/${id}`);
  }
  updateFarmer(farmer:object){
    return this.http.put(`${this.baseUrl}/updateFarmer`,farmer);
  }
}
