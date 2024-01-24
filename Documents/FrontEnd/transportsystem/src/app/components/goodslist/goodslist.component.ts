import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GoodsserviceService } from '../../services/goodsservice.service';
import { Router } from '@angular/router';
import { Goods } from '../../models/goods';

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
}
