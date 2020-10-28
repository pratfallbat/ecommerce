import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Rental } from '../rental';

@Component({
  selector: 'bwm-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {
  @Input() rental: Rental;
  @Output() public rentId = new EventEmitter<number>();

  constructor() { 
    console.log(this.rental)
  }

  ngOnInit() {
    console.log(this.rental)
  }
  onClickChild(id) {
    console.log('id freo rentak')
    console.log(id)
    this.rentId.emit(id);
    
  }
}
