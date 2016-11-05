import { Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class MapService {

    constructor(private http: Http){}
   
    getLocations(latitude:any, longitude:any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
   
        return this.http.get(`http://localhost:8080/getPumpList?latitude=${latitude}&vehicleSpec=%282011-%29&vehicleMake=Nissan&vehicleModel=Leaf&longitude=${longitude}`)
                .map((response:any) => response.json())

    }

}