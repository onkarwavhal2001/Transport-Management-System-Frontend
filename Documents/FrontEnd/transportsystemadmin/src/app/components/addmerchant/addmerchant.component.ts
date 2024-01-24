import { Component } from '@angular/core';
import { Merchant } from '../../models/merchant';
import { MerchantserviceService } from '../../services/merchantservice.service';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Seeds } from '../../models/seeds';

@Component({
  selector: 'app-addmerchant',
  templateUrl: './addmerchant.component.html',
  styleUrl: './addmerchant.component.css'
})
export class AddmerchantComponent {
  submitted = false;

  merchant=new Merchant();
  public seeds: Observable<Seeds[]> =of([]);

  constructor(private service:MerchantserviceService,private router: Router) 
    {

    }
  
    ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.seeds = this.service.getAllSeeds();
    }
  

    addItemSeed(id:string)
    {
      this.seeds.pipe(
        map(seedList => seedList[Number(id)])
      ).subscribe(
        selectedSeed => {
          this.merchant.seeds.push(selectedSeed);
        }
      );
      
    }

  onSubmit()
  {
    this.submitted=true;
   
    this.save();
  }

  save()
  {
    this.service.createMerchant(this.merchant).subscribe();
  }
}
