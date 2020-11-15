import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';
import { RentalService } from './shared/rental.service';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { MapModule} from '../common/map/map.module';
import { AuthGuard } from '../auth/shared/auth.guard';
import { Daterangepicker } from 'ng2-daterangepicker';
import { RentalDetailBookingComponent } from './rental-detail-booking/rental-detail-booking.component';
const routes: Routes = [{
  path: 'rentals', component: RentalComponent,
  children: [
      { path: '', component: RentalListComponent },
      {path:':rentalId',component:RentalDetailsComponent,canActivate:[AuthGuard]}
  ]
}
  
];
@NgModule({
    declarations: [
        RentalComponent,
      RentalListComponent,
      RentalListItemComponent,
      RentalDetailsComponent,
      RentalDetailBookingComponent
    ],
  imports: [
    MapModule,
    HttpClientModule,
    NgPipesModule,
      BrowserModule, 
      CommonModule,
    RouterModule.forChild(routes),
      Daterangepicker
    ],
    providers: [RentalService]
  })
  export class RentalModule { }
  