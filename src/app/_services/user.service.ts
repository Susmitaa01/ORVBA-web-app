import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = "http://localhost:9093/users/";
  constructor(private http:HttpClient) { }
  searchMechanics(tag: string) {
      let new_url = this.API_URL+"searchMechanic/"+tag
      return this.http.get(new_url)
  }

  login(username: String,password: String){
    let new_url = this.API_URL+"/login"
    return this.http.post(new_url,JSON.stringify({username:username,password:password}))
  }

}
