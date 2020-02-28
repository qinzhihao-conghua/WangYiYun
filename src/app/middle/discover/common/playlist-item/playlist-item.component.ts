import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/service/http.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent implements OnInit {

  constructor(
    private http: HttpService
  ) { }

  @Input()
  bgcImgUrl: string;
  @Input()
  width: number;
  @Input()
  height: number;

  songList = [];
  ngOnInit() {
    this.http.getSongList(8).subscribe(songList => {
      pipe(map(songList => songList));
      this.songList = songList;
      console.log("热门推荐", songList);
    })
  }

}
