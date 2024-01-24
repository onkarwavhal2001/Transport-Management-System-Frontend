import { Component } from '@angular/core';
import { Goods } from '../../models/goods';
import { GoodsserviceService } from '../../services/goodsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addgood',
  templateUrl: './addgood.component.html',
  styleUrl: './addgood.component.css'
})
export class AddgoodComponent {
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
