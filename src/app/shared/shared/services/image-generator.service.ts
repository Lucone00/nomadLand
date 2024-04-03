import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageGeneratorService {
  private apiUrl = 'https://api.unsplash.com/photos/random?query=nomadis';
  private accessToken = 'eYCO3sSG58Xv__V53yRHeY9OWrlMkZVKfLFAeeHIsvI';

  constructor(private http: HttpClient) {}

  getRandomImages(count: number): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.accessToken}`,
    });

    const params = {
      count: count.toString(),
      query: 'nomadism',
    };

    return this.http.get<any[]>(this.apiUrl, {
      headers: headers,
      params: params,
    });
  }
}
