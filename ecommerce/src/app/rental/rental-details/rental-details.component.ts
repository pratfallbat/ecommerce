import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from '../rental';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'bwm-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {
  id;
  rental: Rental;
  constructor(private route: ActivatedRoute,private rentalService:RentalService) {
    
}

  ngOnInit() {
    // this.id = this.route.snapshot.params['rentalId'];
    this.route.params.subscribe((params) => {
      this.id = params['rentalId'];    
      console.log(this.id);
      this.getRental(this.id);
    })

  
    console.log(this.rental)

  }
  getRental(rentalId: string) {
    console.log(this.id)
    this.rentalService.getRentalById(rentalId).subscribe(
      (r: Rental) => {
        this.rental = r;
   }
 );
  }

}
