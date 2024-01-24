import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Merchant } from '../../models/merchant';
import { MerchantserviceService } from '../../services/merchantservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchantlist',
  templateUrl: './merchantlist.component.html',
  styleUrl: './merchantlist.component.css'
})
export class MerchantlistComponent {
  public merchants: Observable<Merchant[]> =of([]);
  
  constructor(private service: MerchantserviceService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.merchants = this.service.getAllMerchants();
  }
  merchantDetails(id: number){
    this.router.navigate(['mdetails', id]);
  }

  updateDetails(id:number)
    {
      this.router.navigate(['mupdate', id]);
    }


  deleteMerchant(id:number)
    {
      return this.service.deleteMerchant(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })

    }
    

    
}
