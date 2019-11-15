import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent implements OnInit {

  constructor() { }

  @Input()
  bgcImgUrl:string;
  @Input()
  width:number;
  @Input()
  height:number;

  ngOnInit() {
  }

}
