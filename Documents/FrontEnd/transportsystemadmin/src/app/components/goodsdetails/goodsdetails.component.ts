import { Component } from '@angular/core';
import { Goods } from '../../models/goods';
import { ActivatedRoute, Router } from '@angular/router';
import { GoodsserviceService } from '../../services/goodsservice.service';

@Component({
  selector: 'app-goodsdetails',
  templateUrl: './goodsdetails.component.html',
  styleUrl: './goodsdetails.component.css'
})
export class GoodsdetailsComponent {
  goodsId: number=0;
  goods: Goods=new Goods();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: GoodsserviceService) { }

    ngOnInit() {
      this.goods = new Goods();
  
      this. goodsId = this.route.snapshot.params['goodsId'];
      
      
      this.service.getOneGood(this.goodsId).subscribe((data)=>{
        console.log(data);
        this.goods=data;
      })

    }
    list(){
      this.router.navigate(['glist']);
    }
}
