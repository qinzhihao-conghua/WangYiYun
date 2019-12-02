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
  private baseUrl = "http://localhost:3000/";
  getTopList(): Observable<any> {
    return this.httpService.get("assets/test-data/top-list.json");
  }
  getSongList(limit: number): Observable<any> {
    return this.httpService.get(`${this.baseUrl}personalized?limit=${limit}`);
  }
  /**
   * 获取新碟上架
   * @param offset 用于分页，默认为0
   * @param limit 一次请求个数，默认50
   */
  getDiscList(offset?: number, limit?: number): Observable<any> {
    let receiveOffset = offset || 0;
    let receiveLimit = limit || 50;
    return this.httpService.get(`${this.baseUrl}top/album?offset=${receiveOffset}&limit=${receiveLimit}`);
  }
  getSongsCategory():Observable<any>{
    return this.httpService.get(`${this.baseUrl}playlist/catlist`);
  }
}
