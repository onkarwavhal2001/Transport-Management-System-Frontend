import { Component } from '@angular/core';
import { Merchant } from '../../models/merchant';
import { MerchantserviceService } from '../../services/merchantservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mregister',
  templateUrl: './mregister.component.html',
  styleUrl: './mregister.component.css'
})
export class MregisterComponent {
  merchant:Merchant=new Merchant();
  msg:any='';
  constructor(private service:MerchantserviceService, private router:Router){}
  
    ngOnInit(){
     
  }
  
    submitForm(){
      this.service.createMerchant(this.merchant).subscribe((data)=>{
        console.log("signup succesfully")
        alert("signup succesfully")
        this.msg="Restration Successfully";
        this.router.navigate(['/mlogin'])
      },
      // (error)=>{
      //   this.msg=error.error;
      );
    }
}
