import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../rental';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {
  // private rentals: Rental[];

  constructor(private http:HttpClient) { }


  getRentalById(id: string): Observable<any> {

    return this.http.get('/api/v1/rentals/'+id);
  }
  

  public getRentals(): Observable<any> {
    return this.http.get('/api/v1/rentals');
   
  }
 
 
}
