import { Component } from '@angular/core';
import { MLogin } from '../../models/mlogin';
import { MloginserviceService } from '../../services/mloginservice.service';
import { Router } from '@angular/router';
import { Merchant } from '../../models/merchant';
import { MerchantserviceService } from '../../services/merchantservice.service';

@Component({
  selector: 'app-mlogin',
  templateUrl: './mlogin.component.html',
  styleUrl: './mlogin.component.css'
})
export class MloginComponent {
  merchant:Merchant=new Merchant();
msg:any='';
constructor(private service:MerchantserviceService, private router:Router){}

  ngOnInit(){
   
}

login(){
  this.service.loginMerchant(this.merchant).subscribe((data)=>{
    console.log("Response received");
    this.router.navigate(['/home'])

//   },(err)=>{
//     console.log("Exception occured");
//     this.msg="Bad Credentials , please enter valid data";
});
}
}
