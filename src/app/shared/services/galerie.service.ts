import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GalerieService {
  constructor(protected http: HttpClient) {}

  getPhotos(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos');
  }
}
