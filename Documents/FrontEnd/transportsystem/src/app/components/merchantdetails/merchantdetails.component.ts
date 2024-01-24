import { Component } from '@angular/core';
import { Merchant } from '../../models/merchant';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchantserviceService } from '../../services/merchantservice.service';

@Component({
  selector: 'app-merchantdetails',
  templateUrl: './merchantdetails.component.html',
  styleUrl: './merchantdetails.component.css'
})
export class MerchantdetailsComponent {
  merchantId: number=0;
  merchant: Merchant=new Merchant();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: MerchantserviceService) { }

    ngOnInit() {
      this.merchant = new Merchant();
  
      this. merchantId = this.route.snapshot.params['merchantId'];
      
      
      this.service.getOneMerchant(this.merchantId).subscribe((data)=>{
        console.log(data);
        this.merchant=data;
      })

    }
    list(){
      this.router.navigate(['mlist']);
    }
}
