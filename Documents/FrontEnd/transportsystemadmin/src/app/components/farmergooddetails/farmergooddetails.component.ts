import { Component } from '@angular/core';
import { FarmerserviceService } from '../../services/farmerservice.service';
import { Router } from '@angular/router';
import { Farmer } from '../../models/farmer';

@Component({
  selector: 'app-farmergooddetails',
  templateUrl: './farmergooddetails.component.html',
  styleUrl: './farmergooddetails.component.css'
})
export class FarmergooddetailsComponent {
  constructor(private service: FarmerserviceService,
    private router: Router) {
      
    }
    farmer:Farmer = new Farmer();
    visit=false;

  farmerDetails(id:string)
  {


    return this.service.getOneFarmer(Number(id)).subscribe(
      (data: Farmer)=>{
        this.farmer = data;
        console.log(data);
        console.log(this.farmer);
        this.visit=true;
      })

  }

  addGood(){
    this.router.navigate(['addgoods']);
  }

  addFarmer()
  {
    this.router.navigate(['addfarmer']);
  }
}
