import { Component } from '@angular/core';
import { MerchantserviceService } from '../../services/merchantservice.service';
import { Router } from '@angular/router';
import { Merchant } from '../../models/merchant';

@Component({
  selector: 'app-merchantseeddetails',
  templateUrl: './merchantseeddetails.component.html',
  styleUrl: './merchantseeddetails.component.css'
})
export class MerchantseeddetailsComponent {
  constructor(private service: MerchantserviceService,
    private router: Router) {
      
    }
    merchant:Merchant = new Merchant();
    visit=false;

  merchantDetails(id:string)
  {


    return this.service.getOneMerchant(Number(id)).subscribe(
      (data: Merchant)=>{
        this.merchant = data;
        console.log(data);
        console.log(this.merchant);
        this.visit=true;
      })

  }

  addSeed(){
    this.router.navigate(['addseeds']);
  }

  addMerchant()
  {
    this.router.navigate(['addmerchant']);
  }
}
