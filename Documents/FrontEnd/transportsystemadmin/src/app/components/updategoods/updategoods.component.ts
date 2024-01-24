import { Component } from '@angular/core';
import { Goods } from '../../models/goods';
import { ActivatedRoute, Router } from '@angular/router';
import { GoodsserviceService } from '../../services/goodsservice.service';

@Component({
  selector: 'app-updategoods',
  templateUrl: './updategoods.component.html',
  styleUrl: './updategoods.component.css'
})
export class UpdategoodsComponent {
  goodsId: number=0;
  goods: Goods=new Goods();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: GoodsserviceService) { }


    ngOnInit() {
      this.goods = new Goods();
  
      this. goods = this.route.snapshot.params['goodsId'];
      
      
      this.service.getOneGood(this.goodsId).subscribe((data)=>{
        console.log(data);
        this.goods=data;
      })
            
    }

    onSubmit(){
      this. updateGood();
    }

    updateGood()
    {
      this.service.updateGood(this.goods).subscribe((data)=>{
        console.log(data);
        this.goods= new Goods();
        this.gotoList();
      })
    }

    gotoList(){
      this.router.navigate(['glist']);
    }
}
