import { Component } from '@angular/core';
import { FarmerserviceService } from '../../services/farmerservice.service';
import { Router } from '@angular/router';
import { Farmer } from '../../models/farmer';

@Component({
  selector: 'app-createfarmer',
  templateUrl: './createfarmer.component.html',
  styleUrl: './createfarmer.component.css'
})
export class CreatefarmerComponent 
{

  submitted = false;

  farmer=new Farmer();
  
  constructor(private service:FarmerserviceService,private router: Router) 
    {

    }
  
  

  onSubmit()
  {
    this.submitted=true;
   
    this.save();
  }

  save()
  {
    this.service.createFarmer(this.farmer).subscribe();
  }
}
