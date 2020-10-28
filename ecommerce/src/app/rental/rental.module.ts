import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';
import { RentalService } from './shared/rental.service';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
const routes: Routes = [{
  path: 'rentals', component: RentalComponent,
  children: [
      { path: '', component: RentalListComponent },
      {path:':rentalId',component:RentalDetailsComponent}
  ]
}
  
];
@NgModule({
    declarations: [
        RentalComponent,
      RentalListComponent,
      RentalListItemComponent,
      RentalDetailsComponent
    ],
    imports: [
      BrowserModule, 
      CommonModule,
      RouterModule.forChild(routes)
    ],
    providers: [RentalService]
  })
  export class RentalModule { }
  