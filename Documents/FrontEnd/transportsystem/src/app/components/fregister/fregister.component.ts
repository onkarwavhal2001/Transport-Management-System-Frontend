import { Component } from '@angular/core';
import { Farmer } from '../../models/farmer';
import { FarmerserviceService } from '../../services/farmerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fregister',
  templateUrl: './fregister.component.html',
  styleUrl: './fregister.component.css'
})
export class FregisterComponent {
  farmer:Farmer=new Farmer();
  msg:any='';
  constructor(private service:FarmerserviceService, private router:Router){}
  
    ngOnInit(){
     
  }
  
    submitForm(){
      this.service.createFarmer(this.farmer).subscribe((data)=>{
        console.log("signup succesfully")
        alert("signup succesfully")
        this.msg="Restration Successfully";
        this.router.navigate(['/flogin'])
      },
      // (error)=>{
      //   this.msg=error.error;
      );
    }
}
