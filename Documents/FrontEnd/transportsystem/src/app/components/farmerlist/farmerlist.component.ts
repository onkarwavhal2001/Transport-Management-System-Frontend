import { Component } from '@angular/core';
import { FarmerserviceService } from '../../services/farmerservice.service';
import { Router } from '@angular/router';
import { Farmer } from '../../models/farmer';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-farmerlist',
  templateUrl: './farmerlist.component.html',
  styleUrl: './farmerlist.component.css'
})
export class FarmerlistComponent 
{
  public farmers: Observable<Farmer[]> =of([]);
  
  constructor(private service: FarmerserviceService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.farmers = this.service.getAllFarmer();
  }
  farmerDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateDetails(id:number)
    {
      this.router.navigate(['update', id]);
    }


  deleteFarmer(id:number)
    {
      return this.service.deleteFarmer(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })

    }
    

    
}
