import { Component } from '@angular/core';
import { Farmer } from '../../models/farmer';
import { FarmerserviceService } from '../../services/farmerservice.service';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Goods } from '../../models/goods';

@Component({
  selector: 'app-addfarmer',
  templateUrl: './addfarmer.component.html',
  styleUrl: './addfarmer.component.css'
})
export class AddfarmerComponent {
  submitted = false;

  farmer=new Farmer();
  public goods: Observable<Goods[]> =of([]);
  constructor(private service:FarmerserviceService,private router: Router) 
    {

    }
  
    ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.goods = this.service.getAllGoods();
    }
  

    addItemGood(id:string)
    {
      this.goods.pipe(
        map(goodList => goodList[Number(id)])
      ).subscribe(
        selectedGood => {
          this.farmer.goods.push(selectedGood);
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
    this.service.createFarmer(this.farmer).subscribe();
  }
}
