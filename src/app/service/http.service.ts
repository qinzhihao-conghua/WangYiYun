import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpService: HttpClient
  ) { }
  getTopList(): Observable<any> {
    return this.httpService.get("assets/test-data/top-list.json");
  }
}
