import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../rental';

@Injectable()
export class RentalService {
  private rentals: Rental[]=[{
    id: "1",
    title: "Central Apartment",
    city: "New York",
    street: "Times Sqaure",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: "2",
    title: "Central Apartment 2",
    city: "San Francisco",
    street: "Main street",
    category: "whole condo sanfrasicco",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 12,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "3",
    title: "Central Apartment 3",
    city: "Bratislava",
    street: "Hlavna",
    category: "appartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 334,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "4",
    title: "Central Apartment 4",
    city: "Berlin",
    street: "Haupt strasse",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "Very nice apartment",
    dailyRate: 33,
    shared: true,
    createdAt: "24/12/2017"
}];

  constructor() { }
  public getRentals(): Observable<Rental[]> {
    return new Observable((observer) => {
      
      setTimeout(() => {
        
        observer.next(this.rentals)
      }, 3000);
      
      setTimeout(() => {
        observer.error('I am error')
      }, 4000);
      setTimeout(() => {
        observer.error('I am ')
      }, 5000);
      

    });
  
  }
  // getRentalById(id: number): Rental {

  // var  rentalNew: Rental;
  //   this.rentals.forEach(el => {
  //     if (el.id == id) {
  //       rentalNew = el;
  //     }

  //   });
  //   return rentalNew;
  // }
  getRentalById(id: string): Observable<Rental> {

    return new Observable<Rental>((observer) => {
      const foundRental = this.rentals.find((rental) => {
        return rental.id == id;
      });
      observer.next(foundRental);
    

    });
    }
}
