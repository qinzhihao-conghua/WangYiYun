import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-navgation-bar",
  templateUrl: "./navgation-bar.component.html",
  styleUrls: ["./navgation-bar.component.css"]
})
export class NavgationBarComponent implements OnInit {
  @Input()
  navBarTitle: string;
  @Input()
  navBarTagList: Array<string>[] = [];
  @Input()
  more: object;
  constructor() {}

  ngOnInit() { }
}
