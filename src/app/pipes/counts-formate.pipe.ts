import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countsFormate'
})
export class CountsFormatePipe implements PipeTransform {

  transform(value: number): number | string {
    if (value < 100000) {
      return value;
    }
    else {
      return Math.floor(value / 10000) + "万";
    }
  }

}
