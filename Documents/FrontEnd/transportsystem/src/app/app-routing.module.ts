  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatefarmerComponent } from './components/createfarmer/createfarmer.component';
import { FarmerlistComponent } from './components/farmerlist/farmerlist.component';
import { FarmerdetailsComponent } from './components/farmerdetails/farmerdetails.component';
import { UpdatefarmerComponent } from './components/updatefarmer/updatefarmer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FregisterComponent } from './components/fregister/fregister.component';
import { MregisterComponent } from './components/mregister/mregister.component';
import { MerchantlistComponent } from './components/merchantlist/merchantlist.component';
import { MerchantdetailsComponent } from './components/merchantdetails/merchantdetails.component';
import { UpdatemerchantComponent } from './components/updatemerchant/updatemerchant.component';
import { VehicleslistComponent } from './components/vehicleslist/vehicleslist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { SeedslistComponent } from './components/seedslist/seedslist.component';
import { CreategoodsComponent } from './components/creategoods/creategoods.component';
import { CreateseedsComponent } from './components/createseeds/createseeds.component';
import { MloginComponent } from './components/mlogin/mlogin.component';
import { FloginserviceService } from './services/floginservice.service';
import { FloginComponent } from './components/flogin/flogin.component';
import { SeedsdetailsComponent } from './components/seedsdetails/seedsdetails.component';
const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'sdetails/:seedsId',
    component:SeedsdetailsComponent
  },
  {
    path:'add',
    component:CreatefarmerComponent
  },
  {
    path:'flist',
    component:FarmerlistComponent
  },
  {
    path:'details/:farmerId',
    component:FarmerdetailsComponent
  },
  {
    path:'update/:farmerId',
    component:UpdatefarmerComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'service',
    component:ServiceComponent
  }
,
{
  path:'feedback',
  component:FeedbackComponent
},
{
  path:'fregister',
  component:FregisterComponent
},
{
  path:'mregister',
  component:MregisterComponent
},

{
  path:'mlist',
  component:MerchantlistComponent
}
,
{
  path:'mdetails/:merchantId',
  component:MerchantdetailsComponent
},
{
  path:'mupdate/:merchantId',
  component:UpdatemerchantComponent
},
{
  path:'vlist',
  component:VehicleslistComponent
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
  path:'gadd',
  component:CreategoodsComponent
},
{
  path:'sadd',
  component:CreateseedsComponent
},
{
  path:'mlogin',
  component:MloginComponent
},
{
  path:'flogin',
  component:FloginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
