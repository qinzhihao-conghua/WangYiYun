import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Route, Router, ActivatedRoute, NavigationEnd, Scroll } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(
    private httpservice: HttpService,
    private route: Router,
    private planform: PlatformLocation
  ) { }

  topList: any;
  routerPath:string="";
  ngOnInit() {
    console.log("planform:", this.planform.pathname);
    this.route.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        console.log(data.url);
        this.routerPath=data.url;
      }
      if(data instanceof Scroll){
        console.log("滚动：",data);
      }
    })
    this.httpservice.getTopList().subscribe(data => {
      this.topList = data;
      console.log(data);
    })
  }
  // ngOnChanges() {
  //   console.log(this.route.routeConfig)
  // }
  ngDoCheck() {
    // console.log(this.route.firstChild.url._value[0].path)
    // this.route.fragment.subscribe(data => {
    //   console.log(data);
    // })
    // this.route.url.subscribe(url => console.log(url[0].path));
  }

}
