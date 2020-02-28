import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  /** 
   * 获取歌曲分类
   */
  getSongsCategory(): Observable<any> {
    return this.httpService.get(`${this.baseUrl}playlist/catlist`);
  }
  /**
   * 获取入驻歌手
   * 
   * @param {number} cat 歌手类型
   * @param {number} [limit] 返回数量，默认30
   * @param {number} [offset] 偏移量，用于分页，默认0
   * @returns {Observable<any>} 
   * @memberof HttpService
   */
  getEnterSingers(cat: number, limit?: number, offset?: number): Observable<any> {
    let receiveLimit = limit || 30;
    let receiveOffset = offset || 0;
    return this.httpService.get(`${this.baseUrl}artist/list?cat=${cat}&limit=${receiveLimit}&offset=${receiveOffset}`);
  }
}
