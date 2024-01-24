import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goods } from '../../models/goods';
import { GoodsserviceService } from '../../services/goodsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrl: './goodslist.component.css'
})
export class GoodslistComponent {
  public goods: Observable<Goods[]> =of([]);
  
  constructor(private service: GoodsserviceService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.goods = this.service.getAllGoods();
  }

  goodDetails(id: number){
    this.router.navigate(['gdetails', id]);
  }

  updateDetails(id:number)
    {
      this.router.navigate(['gupdate', id]);
    }


  deleteGood(id:number)
    {
      return this.service.deleteGood(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })

    }
}
