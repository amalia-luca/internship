import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  constructor(private httpClient: HttpClient) { }
  public getData() {
    return this.httpClient.get("https://reqres.in/api/users/2");
  }


}
