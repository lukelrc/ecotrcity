import { NgModule ,ApplicationRef}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MapComponent }  from './map/map.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
 
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGs_CvBysRtxfsR343Ua1D6jmMn8AatKI'
    }) ],
  declarations: [ 
    AppComponent,
    MapComponent
    ],
  bootstrap:    [ 
    AppComponent 
     ]
})
export class AppModule {


 }
