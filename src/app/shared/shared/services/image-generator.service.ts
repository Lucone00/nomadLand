import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageGeneratorService {
  private apiUrl = 'https://api.unsplash.com/photos/random?query=nature';
  private accessToken = 'C8yjaG1y2PLF2lHAGa9IAQ5RzpO6fvEv4pxyfJ2gKA8';

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
