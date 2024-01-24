import { Observable } from "rxjs/internal/Observable";

export class Farmer
{

    farmerId:number;
    farmerName:string;
    farmerPassword:string;
    fMobNo:number;
    femailId:string;
    farmerAddress:string;

    constructor()
    {
        this.farmerId=0;
        this.farmerName="";
        this.farmerPassword="";
        this.fMobNo=0;
        this.femailId="";
        this.farmerAddress="";
    }
   
}