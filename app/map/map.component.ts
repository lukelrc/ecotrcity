import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { HttpModule, JsonpModule } from '@angular/http';

declare var google: any;
declare var navigator:any
@Component({
    selector: 'map',
   templateUrl: './app/map/map.component.html',
    providers:[MapService]
})
export class MapComponent { 

    private locationsUnparsed:any[] = []; 
    private locations:any  = [];
    latitude: number;
    longitude: number;
    constructor(
        private mapService: MapService
    ){}
 
    ngOnInit(){
        this.getLocations();
    }

    getLocations(){
               
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position:any)=>{

                this.latitude = position.coords.latitude; 
                this.longitude = position.coords.longitude;    
              
                this.mapService.getLocations(this.latitude.toString(),this.longitude.toString()).subscribe(

                    (results) => {this.locationsUnparsed.push(results.result);},
                    (err)=>{console.log(err)},
                    ()=>{  
                        //The map has to recieve the lat long as numbers 
                        this.locationsUnparsed[0].forEach((result:any) =>{
                            this.locations.push({
                                "latitude": Number(result.latitude), 
                                "longitude": Number(result.longitude)
                            });         
                        });     

                    })
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
}

