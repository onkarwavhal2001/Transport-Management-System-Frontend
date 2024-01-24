import { Component } from '@angular/core';
import { Farmer } from '../../models/farmer';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerserviceService } from '../../services/farmerservice.service';

@Component({
  selector: 'app-farmerdetails',
  templateUrl: './farmerdetails.component.html',
  styleUrl: './farmerdetails.component.css'
})
export class FarmerdetailsComponent {
  farmerId: number=0;
  farmer: Farmer=new Farmer();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: FarmerserviceService) { }

    ngOnInit() {
      this.farmer = new Farmer();
  
      this. farmerId = this.route.snapshot.params['farmerId'];
      
      
      this.service.getOneFarmer(this.farmerId).subscribe((data)=>{
        console.log(data);
        this.farmer=data;
      })

    }
    list(){
      this.router.navigate(['farmerlist']);
    }
}
