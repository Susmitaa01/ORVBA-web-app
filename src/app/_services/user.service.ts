import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = "http://localhost:9093/users/searchMechanic/";
  constructor(private http:HttpClient) { }
  getPosts(tag: string) {
      let new_url = this.API_URL+tag
      return this.http.get(new_url)
  }
}
