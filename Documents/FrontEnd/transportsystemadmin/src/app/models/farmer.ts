import { Observable } from "rxjs/internal/Observable";
import { Goods } from "./goods";

export class Farmer
{

    farmerId:number;
    farmerName:string;
    farmerPassword:string;
    fMobNo:number;
    femailId:string;
    farmerAddress:string;
    goods:Goods[];
    constructor()
    {
        this.farmerId=0;
        this.farmerName="";
        this.farmerPassword="";
        this.fMobNo=0;
        this.femailId="";
        this.farmerAddress="";
        this.goods=[]
    }
   
}