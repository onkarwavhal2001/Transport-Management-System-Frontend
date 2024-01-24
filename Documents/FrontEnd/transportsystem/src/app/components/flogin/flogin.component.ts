import { Component } from '@angular/core';
import { FLogin } from '../../models/flogin';
import { FloginserviceService } from '../../services/floginservice.service';
import { Router } from '@angular/router';
import { Farmer } from '../../models/farmer';
import { FarmerserviceService } from '../../services/farmerservice.service';

@Component({
  selector: 'app-flogin',
  templateUrl: './flogin.component.html',
  styleUrl: './flogin.component.css'
})
export class FloginComponent {
  farmer:Farmer=new Farmer();
msg:any='';
constructor(private service:FarmerserviceService, private router:Router){}

  ngOnInit(){
   
}

login(){
  this.service.loginFarmer(this.farmer).subscribe((data)=>{
    console.log("Response received");
    this.router.navigate(['/home'])

//   },(err)=>{
//     console.log("Exception occured");
//     this.msg="Bad Credentials , please enter valid data";
});
}
}
