import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeedsserviceService {

  
  baseUrl='http://localhost:8082';

  constructor(private http:HttpClient) { }

  createSeed(seeds: Object): Observable<Object> {
    console.log(seeds);
    return this.http.post(`${this.baseUrl}/addseeds`, seeds); 
  }
  getAllSeeds():any
  {
    return this.http.get(`${this.baseUrl}/getAllSeeds`);
  }

  getOneSeed(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getSeed/${id}`);
  }
}
