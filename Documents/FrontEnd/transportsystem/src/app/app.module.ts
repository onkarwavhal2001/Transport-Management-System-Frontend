import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreatefarmerComponent } from './components/createfarmer/createfarmer.component';
import { FarmerdetailsComponent } from './components/farmerdetails/farmerdetails.component';
import { FarmerlistComponent } from './components/farmerlist/farmerlist.component';
import { UpdatefarmerComponent } from './components/updatefarmer/updatefarmer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { FregisterComponent } from './components/fregister/fregister.component';
import { MregisterComponent } from './components/mregister/mregister.component';
import { MerchantlistComponent } from './components/merchantlist/merchantlist.component';
import { MerchantdetailsComponent } from './components/merchantdetails/merchantdetails.component';
import { UpdatemerchantComponent } from './components/updatemerchant/updatemerchant.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VehicledetailsComponent } from './components/vehicledetails/vehicledetails.component';
import { VehicleslistComponent } from './components/vehicleslist/vehicleslist.component';
import { UpdatevehicleComponent } from './components/updatevehicle/updatevehicle.component';
import { SeedslistComponent } from './components/seedslist/seedslist.component';
import { CreategoodsComponent } from './components/creategoods/creategoods.component';
import { CreateseedsComponent } from './components/createseeds/createseeds.component';
import { MloginComponent } from './components/mlogin/mlogin.component';
import { FloginComponent } from './components/flogin/flogin.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatefarmerComponent,
    NavbarComponent,
    FarmerdetailsComponent,
    FarmerlistComponent,
    UpdatefarmerComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    FeedbackComponent,
    FooterComponent,
    FregisterComponent,
    MregisterComponent,
    MerchantlistComponent,
    MerchantdetailsComponent,
    UpdatemerchantComponent,
    GoodslistComponent,
    VehicledetailsComponent,
    VehicleslistComponent,
    UpdatevehicleComponent,
    SeedslistComponent,
    CreategoodsComponent,
    CreateseedsComponent,
    MloginComponent,
    FloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
