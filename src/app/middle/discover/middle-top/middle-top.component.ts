import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-middle-top',
  templateUrl: './middle-top.component.html',
  styleUrls: ['./middle-top.component.css']
})
export class MiddleTopComponent implements OnInit {

  constructor() { }

  @ViewChild("imagesContent")
  imagesContent:ElementRef;
  @ViewChild("dots")
  dots: ElementRef;
  ngOnInit() {
    this.setScroll();
    const that=this;
    this.imagesContent.nativeElement.onmouseenter=function(){
      // 鼠标进入这个区域，进入子元素不会触发
      console.log('onmouseenter');
      clearInterval(that.timeId);
    };
    this.imagesContent.nativeElement.onmouseleave=function(){
      // 鼠标离开这个区域，进入子元素不会触发
      console.log('onmouseleave');
      that.setScroll();
    };
    this.imagesContent.nativeElement.onmousemove=function(){
      // 鼠标进入这个区域以及在这个区域移动，包括子元素
      // console.log('onmousemove');
    };
    this.imagesContent.nativeElement.onmouseout=function(){
      // 鼠标离开这个区域，进入子元素也会触发
      // console.log('onmouseout');
    };
    this.imagesContent.nativeElement.onmouseover=function(){
      // 鼠标离开这个区域，进入子元素也会触发
      // console.log('onmouseover');
    };
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
  imageIndex: number = 0;
  timeId: any;
  setScroll() {
    this.timeId = setInterval(() => {
      this.imageIndex++;
      if (this.imageIndex == this.images.length) {
        this.imageIndex = 0;
      }
      this.imageSrc = this.images[this.imageIndex].scroll;
      this.imageBgc = "url(" + this.images[this.imageIndex].bgc + ")";
    }, 4000);
  }
  dotsScroll(i) {
    if (i  == this.imageIndex) {
      return 'auto-scroll';
    }
  }
  locationImage(i) {
    // console.log(i);
    this.imageSrc = this.images[i].scroll;
    this.imageBgc = "url(" + this.images[i].bgc + ")";
    this.imageIndex = i as number;
  }
 
  scroll(side: string) {
    if (side == "left") {
      // console.log('left', this.imageIndex);
      this.imageIndex--;
      if (this.imageIndex < 0) {
        this.imageIndex = this.images.length-1;
      }
      this.imageBgc = "url(" + this.images[this.imageIndex].bgc + ")";
      this.imageSrc = this.images[this.imageIndex].scroll;
    }
    else if (side == "right") {
      // console.log('right', this.imageIndex);
      this.imageIndex++;
      if (this.imageIndex == this.images.length) {
        this.imageIndex = 0;
      }
      this.imageBgc = "url(" + this.images[this.imageIndex].bgc + ")";
      this.imageSrc = this.images[this.imageIndex].scroll;
    }
  }

}
