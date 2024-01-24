import { Observable } from "rxjs/internal/Observable";

export class Vehicle
{

    vehicleId:number;
    vehicleType:string;
    capacity:number;
    availabilityStatus:string;
   

    constructor()
    {
        this.vehicleId=0;
        this.vehicleType="";
        this.capacity=0;
        this.availabilityStatus="";
        
    }
   
}