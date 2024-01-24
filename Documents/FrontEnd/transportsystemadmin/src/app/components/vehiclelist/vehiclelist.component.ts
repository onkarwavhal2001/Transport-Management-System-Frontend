import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../../models/vehicle';
import { VehicleserviceService } from '../../services/vehicleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrl: './vehiclelist.component.css'
})
export class VehiclelistComponent {
  public vehicles: Observable<Vehicle[]> =of([]);
  
  constructor(private service:VehicleserviceService ,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.vehicles = this.service.getAllVehicles();
  }
}
