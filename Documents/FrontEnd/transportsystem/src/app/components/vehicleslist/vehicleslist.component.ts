import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VehicleserviceService } from '../../services/vehicleservice.service';
import { Router } from '@angular/router';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicleslist',
  templateUrl: './vehicleslist.component.html',
  styleUrl: './vehicleslist.component.css'
})
export class VehicleslistComponent {
  public vehicles: Observable<Vehicle[]> =of([]);
  
  constructor(private service: VehicleserviceService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.vehicles = this.service.getAllVehicles();
  }
}
