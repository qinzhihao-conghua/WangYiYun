import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-disc',
  templateUrl: './new-disc.component.html',
  styleUrls: ['./new-disc.component.css']
})
export class NewDiscComponent implements OnInit {

  @Input()
  newDisc: Array<object>[];
  constructor() { }

  ngOnInit() {
  }
  test: number = 0;
  scroll(e: Event) {
    e.stopPropagation();
    e.preventDefault();
  }

}
