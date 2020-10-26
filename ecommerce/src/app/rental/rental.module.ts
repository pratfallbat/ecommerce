import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';

@NgModule({
    declarations: [
        RentalComponent,
      RentalListComponent,
      RentalListItemComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: []
  })
  export class RentalModule { }
  