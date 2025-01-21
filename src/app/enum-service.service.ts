
// src/app/services/enum.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnumServiceService {
  private baseUrl = 'http://localhost:9090/transposync/Enum/api';

  constructor(private http: HttpClient) {}

  getTransportTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/transport-types`);
  }

  getLignes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/lignes`);
  }

  getBusArrival(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/busArrival`);
  }
  getBusDeparture(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/busDepart`);
  }
  getMetroA1(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/metroA1`);
  }
  getMetroA2(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/metroA2`);
  }  getMetroA3(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/metroA3`);
  }
  getMetroA4(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/metroA4`);
  }
  getMetroA5(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/metroA5`);
  }

  getMetroD1(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/metroD1`);
  }
  getMetroD2(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/metroD2`);
  }
  getMetroD3(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/metroD3`);
  }
  getMetroD4(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/metroD4`);
  }
  getMetroD5(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/metroD5`);
  }

}

