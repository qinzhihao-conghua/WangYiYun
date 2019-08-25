import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-contain',
  templateUrl: './middle-contain.component.html',
  styleUrls: ['./middle-contain.component.css']
})
export class MiddleContainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  XDSJDATA: any[] = [
    [
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "二狗子1"
      },
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "傻狍子2"
      },
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "二狗子3"
      },
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "傻狍子4"
      }, {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "二狗子5"
      }
    ],
    [
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "二狗子6"
      },
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "傻狍子7"
      },
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "二狗子8"
      },
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "傻狍子9"
      }, {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "二狗子10"
      }
    ],
    [
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "二狗子11"
      },
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "傻狍子12"
      },
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "二狗子13"
      },
      {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "傻狍子14"
      }, {
        imgSrc: "../../../../assets/images/狗子.jpg",
        desc: "二狗子15"
      }
    ],
  ]

  scroll(index: string) {
    if (index == "0") {
      return "one";
    }
    else if(index == "1"){
      return "two";
    }
    else if(index == "2"){
      return "three";
    }
  }
}
