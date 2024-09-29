import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { provideHttpClient  } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})

export class WorldBankService {
  private apiUrl = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) {}

  getCountryData(countryCode: string): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/${countryCode}?format=json`);
  }
}