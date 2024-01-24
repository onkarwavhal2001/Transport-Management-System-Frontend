import { Observable } from "rxjs/internal/Observable";

export class Goods
{

    goodsId:number;
    description:string;
    quantity:number;
    pickupLocation:string;
    deliveryLocation:string;
    status:string;
   

    constructor()
    {
        this.goodsId=0;
        this.description="";
        this.quantity=0;
        this.pickupLocation="";
        this.deliveryLocation="";
        this.status="";
        
    }
   
}