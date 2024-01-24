import { Component } from '@angular/core';
import { Merchant } from '../../models/merchant';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchantserviceService } from '../../services/merchantservice.service';

@Component({
  selector: 'app-updatemerchant',
  templateUrl: './updatemerchant.component.html',
  styleUrl: './updatemerchant.component.css'
})
export class UpdatemerchantComponent {
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

    onSubmit(){
      this. updateMerchant();
    }

    updateMerchant()
    {
      this.service.updateMerchant(this.merchant).subscribe((data)=>{
        console.log(data);
        this.merchant= new Merchant();
        this.gotoList();
      })
    }

    gotoList(){
      this.router.navigate(['mlist']);
    }
}
