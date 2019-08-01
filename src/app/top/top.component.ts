import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(
    private httpservice: HttpService,
    private route:ActivatedRoute
  ) { }

  topList: any;
  ngOnInit() {
    console.log(this.route.routeConfig)
    this.httpservice.getTopList().subscribe(data => {
      this.topList = data;
      console.log(data);
    })
  }
  ngOnChanges() {
    console.log(this.route.routeConfig)
  }

}
