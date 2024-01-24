import { Observable } from "rxjs/internal/Observable";

export class Seeds
{

    seedssId:number;
    sdescription:string;
    squantity:number;
    spickupLocation:string;
    sdeliveryLocation:string;
    sstatus:string;
   

    constructor()
    {
        this.seedssId=0;
        this.sdescription="";
        this.squantity=0;
        this.spickupLocation="";
        this.sdeliveryLocation="";
        this.sstatus="";
        
    }
   
}