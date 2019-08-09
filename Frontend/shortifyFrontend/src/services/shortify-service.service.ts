import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShortifyServiceService {
  constructor(private http: HttpClient) {}

  shortifytheURL(url: string) {
    let URL = '/api/url/shorten';
    let body = { longURL: url };
    return this.http.post(URL, body);
  }

  sayHello() {
    let URL = '/';
    return this.http.get(URL);
  }
}
