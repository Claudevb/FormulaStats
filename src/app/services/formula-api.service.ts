/* eslint-disable @typescript-eslint/dot-notation */
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormulaApiService {
  private url = 'http://ergast.com/api/f1';


  constructor(private http: HttpClient) {}

    getSeason(season: any, round: any ): Observable<any[]> {
        return this.http.get(this.url +'/' + season + '/' + round +'.json?')
        .pipe(
          map((results: any) => {
            console.log('RAW Data:: ', results);
            return results.MRData.RaceTable.Races;
          })
      );
    }

  getDrivers(): Observable<any[]>{
    return this.http.get<any[]>(this.url +'/drivers.json?')
    .pipe(
      map((results: any) => {
        console.log('RAW Data: ', results);
        return results.MRData.DriverTable.Drivers;
      })
    );
  }
}
