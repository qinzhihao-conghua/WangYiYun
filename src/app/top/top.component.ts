import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(
    private httpservice: HttpService
  ) { }

  topList: any;
  ngOnInit() {
    this.httpservice.getTopList().subscribe(data => {
      this.topList = data;
      console.log(data);
    })
  }

}
