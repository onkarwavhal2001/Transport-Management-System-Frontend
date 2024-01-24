import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfarmerComponent } from './components/addfarmer/addfarmer.component';
import { FarmerlistComponent } from './components/farmerlist/farmerlist.component';
import { UpdatefarmerComponent } from './components/updatefarmer/updatefarmer.component';
import { FarmerdetailsComponent } from './components/farmerdetails/farmerdetails.component';
import { AddgoodComponent } from './components/addgood/addgood.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { AddseedComponent } from './components/addseed/addseed.component';
import { SeedslistComponent } from './components/seedslist/seedslist.component';
import { AddmerchantComponent } from './components/addmerchant/addmerchant.component';
import { MerchantlistComponent } from './components/merchantlist/merchantlist.component';
import { MerchantdetailsComponent } from './components/merchantdetails/merchantdetails.component';
import { GoodsdetailsComponent } from './components/goodsdetails/goodsdetails.component';
import { UpdategoodsComponent } from './components/updategoods/updategoods.component';
import { SeedsdetailsComponent } from './components/seedsdetails/seedsdetails.component';
import { UpdateseedsComponent } from './components/updateseeds/updateseeds.component';
import { VehiclelistComponent } from './components/vehiclelist/vehiclelist.component';
import { FarmergooddetailsComponent } from './components/farmergooddetails/farmergooddetails.component';
import { MerchantseeddetailsComponent } from './components/merchantseeddetails/merchantseeddetails.component';

const routes: Routes = [
  {
    path:'addfarmer',
    component:AddfarmerComponent
  },
  {
    path:'farmerlist',
    component:FarmerlistComponent
  },
  {
    path:'update/:farmerId',
    component:UpdatefarmerComponent
  },
  {
    path:'details/:farmerId',
    component:FarmerdetailsComponent
  },
  {
    path:'addgood',
    component:AddgoodComponent
  },
  {
    path:'goodlist',
    component:GoodslistComponent
  },
  {
    path:'addseed',
    component:AddseedComponent
  },{
    path:'addfarmer',
    component:AddfarmerComponent
  },
  {
    path:'addmerchant',
    component:AddmerchantComponent
  },
  {
    path:'merchantlist',
    component:MerchantlistComponent
  },
  {
    path:'mdetails/:merchantId',
    component:MerchantdetailsComponent
  },
  {
    path:'glist',
    component:GoodslistComponent
  },
  {
    path:'slist',
    component:SeedslistComponent
  },
  {
    path:'mlist',
    component:MerchantlistComponent
  },
  {
    path:'gdetails/:goodsId',
    component:GoodsdetailsComponent
  },
  {
    path:'sdetails/:seedsId',
    component:SeedsdetailsComponent
  },
  {
    path:'mdetails/:merchantId',
    component:MerchantdetailsComponent
  },
  {
    path:'gupdate/:goodsId',
    component:UpdategoodsComponent
  },
  {
    path:'supdate/:seedsId',
    component:UpdateseedsComponent
  },
  {
    path:'vlist',
    component:VehiclelistComponent
  },
  {
    path:'search',
    component:FarmergooddetailsComponent
  },
  {
    path:'searchm',
    component:MerchantseeddetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
