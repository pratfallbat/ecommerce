import { Component, Input, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() location: string;

  title = 'My first AGM project';
  lat:number = 51.678418;
  lng: number = 7.809007;
  
  constructor(private mapService:MapService) { }

  ngOnInit() {
  }

  mapReadyHandler() {
    console.log(this.location)
    this.mapService.geoCodeLocation(this.location).subscribe(
      (coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
      }
  )
  }
}
