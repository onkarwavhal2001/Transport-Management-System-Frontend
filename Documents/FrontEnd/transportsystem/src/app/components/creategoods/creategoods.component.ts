import { Component } from '@angular/core';
import { Goods } from '../../models/goods';
import { GoodsserviceService } from '../../services/goodsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creategoods',
  templateUrl: './creategoods.component.html',
  styleUrl: './creategoods.component.css'
})
export class CreategoodsComponent {
  submitted = false;

  goods=new Goods();
  
  constructor(private service:GoodsserviceService,private router: Router) 
    {

    }
  
  

  onSubmit()
  {
    this.submitted=true;
   
    this.save();
  }

  save()
  {
    this.service.createGood(this.goods).subscribe();
  }

}
