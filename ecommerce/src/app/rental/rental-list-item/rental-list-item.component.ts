import { Component, Input, OnInit } from '@angular/core';
import { Rental } from '../rental';

@Component({
  selector: 'bwm-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {
  @Input() rental: Rental;
  constructor() { 
    console.log(this.rental)
  }

  ngOnInit() {
    console.log(this.rental)
  }

}
