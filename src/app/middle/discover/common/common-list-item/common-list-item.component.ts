import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-list-item',
  templateUrl: './common-list-item.component.html',
  styleUrls: ['./common-list-item.component.css']
})
export class CommonListItemComponent implements OnInit {

  constructor() { }

  @Input()
  set data(value: any[]) {
    if (value) {
      value.forEach(item => {
        let obj = {};
        obj['name'] = item[this.name];
        obj['img'] = item[this.img];
        obj['desc'] = item[this.desc] || '音乐人';
        this.resultData.push(obj);
      });
    }
  }

  @Input()
  img: string;
  @Input()
  name: string;
  @Input()
  desc: string;

  resultData: any[] = [];
  ngOnInit() {

  }

}
