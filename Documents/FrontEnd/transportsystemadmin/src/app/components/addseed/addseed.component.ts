import { Component } from '@angular/core';
import { Seeds } from '../../models/seeds';
import { SeedsserviceService } from '../../services/seedsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addseed',
  templateUrl: './addseed.component.html',
  styleUrl: './addseed.component.css'
})
export class AddseedComponent {
  submitted = false;

  seeds=new Seeds();
  
  constructor(private service:SeedsserviceService,private router: Router) 
    {

    }
  
  

  onSubmit()
  {
    this.submitted=true;
   
    this.save();
  }

  save()
  {
    this.service.createSeed(this.seeds).subscribe();
  }
}
