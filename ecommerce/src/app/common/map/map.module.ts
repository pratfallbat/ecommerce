import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { MapService } from './map.service';

@NgModule({
  declarations: [
  MapComponent
  
    ],
    exports: [
        MapComponent
    ],
    
    imports: [
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBryR9D5lcadwyNWd_6zhUMX-GZzUKwEXE'
        })
   
  ],
  providers: [MapService],
  bootstrap: []
})
export class MapModule { }
