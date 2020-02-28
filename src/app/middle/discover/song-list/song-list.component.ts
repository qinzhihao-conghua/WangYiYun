import { filter } from 'rxjs/operators';
import { HttpService } from 'src/app/service/http.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  constructor(
    private http: HttpService
  ) { }

  newDiscList = [];
  navBarTagList = ['华语', '流行', '摇滚', '民谣', '电子'];//未完成筛选
  enterSingers = [];
  ngOnInit() {
    this.http.getDiscList(0, 10).subscribe(discList => {
      this.newDiscList = this.sliceDiscList(discList.albums, 5);
    });
    this.http.getSongsCategory().subscribe(songsCategory => {
      console.log("歌单", songsCategory.sub);
    });
    this.http.getEnterSingers(5001, 5).subscribe(enterSingers => {
      console.log("入驻歌手", enterSingers);
      this.enterSingers = enterSingers;
    })
  }
  /**
   * 切割数组
   * @param discList 要切割的数据
   * @param cutCount 一次切割的数量
   */
  sliceDiscList(discList: Array<any>[], cutCount?: number): Array<any>[] {
    let cut = cutCount || 5;
    let result = [];
    let currentCutIndex = 0;
    for (let i = 0; i < discList.length; i++) {
      if (i % cut === 0 && i != 0) {
        result.push(discList.slice(currentCutIndex, cut));
        currentCutIndex = i;
      }
      if (i + 1 == discList.length) {
        result.push(discList.slice(currentCutIndex, discList.length));
      }
    }
    console.log("切割结果", result);
    return result;
  }

  // scroll(index: string) {
  //   if (index == "0") {
  //     return "one";
  //   }
  //   else if (index == "1") {
  //     return "two";
  //   }
  //   else if (index == "2") {
  //     return "three";
  //   }
  // }
}
