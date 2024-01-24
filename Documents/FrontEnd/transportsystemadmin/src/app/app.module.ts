import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddfarmerComponent } from './components/addfarmer/addfarmer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FarmerlistComponent } from './components/farmerlist/farmerlist.component';
import { FarmerdetailsComponent } from './components/farmerdetails/farmerdetails.component';
import { UpdatefarmerComponent } from './components/updatefarmer/updatefarmer.component';
import { AddgoodComponent } from './components/addgood/addgood.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { AddseedComponent } from './components/addseed/addseed.component';
import { AddmerchantComponent } from './components/addmerchant/addmerchant.component';
import { MerchantlistComponent } from './components/merchantlist/merchantlist.component';
import { SeedslistComponent } from './components/seedslist/seedslist.component';
import { MerchantdetailsComponent } from './components/merchantdetails/merchantdetails.component';
import { GoodsdetailsComponent } from './components/goodsdetails/goodsdetails.component';
import { UpdategoodsComponent } from './components/updategoods/updategoods.component';
import { SeedsdetailsComponent } from './components/seedsdetails/seedsdetails.component';
import { UpdateseedsComponent } from './components/updateseeds/updateseeds.component';
import { VehiclelistComponent } from './components/vehiclelist/vehiclelist.component';
import { FarmergooddetailsComponent } from './components/farmergooddetails/farmergooddetails.component';
import { MerchantseeddetailsComponent } from './components/merchantseeddetails/merchantseeddetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AddfarmerComponent,
    NavbarComponent,
    AddvehicleComponent,
    FarmerlistComponent,
    FarmerdetailsComponent,
    UpdatefarmerComponent,
    AddgoodComponent,
    GoodslistComponent,
    AddseedComponent,
    AddmerchantComponent,
    MerchantlistComponent,
    SeedslistComponent,
    MerchantdetailsComponent,
    GoodsdetailsComponent,
    UpdategoodsComponent,
    SeedsdetailsComponent,
    UpdateseedsComponent,
    VehiclelistComponent,
    FarmergooddetailsComponent,
    MerchantseeddetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
