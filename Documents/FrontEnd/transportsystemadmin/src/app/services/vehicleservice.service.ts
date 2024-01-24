import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleserviceService {

  baseUrl='http://localhost:8082';

  constructor(private http:HttpClient) { }

  getAllVehicles():any
  {
    return this.http.get(`${this.baseUrl}/getAllVehicle`);
  }
  
}
