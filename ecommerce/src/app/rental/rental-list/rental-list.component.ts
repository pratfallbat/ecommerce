import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rental } from '../rental';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentalList: Rental[];


  constructor(private rentalService:RentalService,private router:Router) { 
  
   
  }
  clickedRental(event) {
    console.log('id in parent');
    console.log(event)
    this.router.navigate(['/rentals', event]);
  }
  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();
    
    rentalObservable.subscribe(
      (rentals:Rental[]) => {
        this.rentalList = rentals;
      },
      (err) => { console.log(err) },
      () => {
      
      });

  }

}
