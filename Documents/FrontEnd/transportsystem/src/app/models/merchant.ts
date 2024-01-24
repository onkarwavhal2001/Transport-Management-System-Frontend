import { Observable } from "rxjs/internal/Observable";

export class Merchant
{

    merchantId:number;
    merchantName:string;
    merchantPassword:string;
    mMobNo:number;
    emailId:string;
    merchantAddress:string;

    constructor()
    {
        this.merchantId=0;
        this.merchantName="";
        this.merchantPassword="";
        this.mMobNo=0;
        this.emailId="";
        this.merchantAddress="";
    }
   
}