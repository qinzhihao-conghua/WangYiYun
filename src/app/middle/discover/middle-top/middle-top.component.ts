import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-top',
  templateUrl: './middle-top.component.html',
  styleUrls: ['./middle-top.component.css']
})
export class MiddleTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setScroll();
  }

  images: any[] = [
    { scroll: "../../../../assets/images/1.jpg", bgc: "../../../../assets/images/1-1.jpg" },
    { scroll: "../../../../assets/images/2.jpg", bgc: "../../../../assets/images/2-1.jpg" },
    { scroll: "../../../../assets/images/3.jpg", bgc: "../../../../assets/images/3-1.jpg" },
    { scroll: "../../../../assets/images/4.jpg", bgc: "../../../../assets/images/4-1.jpg" },
    { scroll: "../../../../assets/images/5.jpg", bgc: "../../../../assets/images/5-1.jpg" },
    { scroll: "../../../../assets/images/6.jpg", bgc: "../../../../assets/images/6-1.jpg" },
    { scroll: "../../../../assets/images/7.jpg", bgc: "../../../../assets/images/7-1.jpg" },
    { scroll: "../../../../assets/images/8.jpg", bgc: "../../../../assets/images/8-1.jpg" },
    { scroll: "../../../../assets/images/9.jpg", bgc: "../../../../assets/images/9-1.jpg" }
  ]
  imageSrc: string = "../../../../assets/images/1.jpg";
  imageBgc: string = "";
  setScroll() {
    let i = 1;
    setInterval(() => {
      if (i == this.images.length) {
        i = 0;
      }
      this.imageSrc = this.images[i].scroll;
      this.imageBgc = "url(" + this.images[i].bgc + ")";
      i++;
    }, 4000);
  }
  locationImage(i){
    console.log(i);
  }

}
